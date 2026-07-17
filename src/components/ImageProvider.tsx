import React, { createContext, useContext, useState, useEffect } from 'react';
import { collection, onSnapshot, query, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { IMAGES as DEFAULT_IMAGES } from '../lib/images';
import type { Images } from '../lib/images';

const ImageContext = createContext<Images>(DEFAULT_IMAGES);

export function ImageProvider({ children }: { children: React.ReactNode }) {
  const [overrides, setOverrides] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const unsub = onSnapshot(
        query(collection(db, 'siteImages'), limit(500)),
        (snap) => {
          const map: Record<string, string> = {};
          snap.forEach((d) => {
            const data = d.data();
            if (data.url) map[d.id] = data.url;
          });
          setOverrides(map);
        },
        (err) => {
          if (import.meta.env.DEV) console.warn('Firestore image sync failed, using defaults:', err.message);
        }
      );
      return unsub;
    } catch {
      return () => {};
    }
  }, []);

  const resolved = { ...DEFAULT_IMAGES };
  for (const [key, url] of Object.entries(overrides)) {
    const imgUrl = url as string;
    if (key in resolved && typeof resolved[key as keyof typeof resolved] === 'string') {
      (resolved as any)[key] = imgUrl;
    } else if (key.startsWith('gallery_')) {
      const idx = parseInt(key.split('_')[1], 10);
      if (!isNaN(idx) && Array.isArray(resolved.gallery)) {
        resolved.gallery = [...resolved.gallery];
        resolved.gallery[idx] = imgUrl;
      }
    } else if (key.startsWith('team_')) {
      const idx = parseInt(key.split('_')[1], 10);
      if (!isNaN(idx) && Array.isArray(resolved.team)) {
        resolved.team = [...resolved.team];
        resolved.team[idx] = imgUrl;
      }
    }
  }

  return <ImageContext.Provider value={resolved}>{children}</ImageContext.Provider>;
}

export function useImages(): Images {
  return useContext(ImageContext);
}
