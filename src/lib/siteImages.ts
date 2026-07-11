import { useState, useEffect } from 'react';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  onSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';
import { IMAGES } from './images';

export { onSnapshot, collection } from 'firebase/firestore';
export { db } from './firebase';

const COLLECTION = 'siteImages';

export interface SiteImage {
  slot: string;
  url: string;
  label: string;
  updatedAt: Timestamp | null;
}

export async function saveSiteImage(slot: string, url: string, label: string) {
  await setDoc(doc(db, COLLECTION, slot), {
    slot,
    url,
    label,
    updatedAt: Timestamp.now(),
  });
}

export async function removeSiteImage(slot: string) {
  await deleteDoc(doc(db, COLLECTION, slot));
}

export async function getAllSiteImages(): Promise<Record<string, SiteImage>> {
  const snap = await getDocs(collection(db, COLLECTION));
  const map: Record<string, SiteImage> = {};
  snap.forEach((d) => {
    map[d.id] = d.data() as SiteImage;
  });
  return map;
}

/**
 * Returns the IMAGES object with any Firestore overrides applied.
 * Falls back to the hardcoded Cloudinary URLs for any slot not in Firestore.
 */
export function useSiteImages() {
  const [overrides, setOverrides] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, COLLECTION), (snap) => {
      const map: Record<string, string> = {};
      snap.forEach((d) => {
        const data = d.data();
        if (data.url) map[d.id] = data.url;
      });
      setOverrides(map);
      setLoading(false);
    }, () => {
      setLoading(false);
    });
    return unsub;
  }, []);

  const resolved = { ...IMAGES };
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

  return { images: resolved, loading };
}

/**
 * Get all stored media entries from Firestore (for admin panel).
 */
export async function getMediaLibrary(): Promise<SiteImage[]> {
  const snap = await getDocs(collection(db, COLLECTION));
  const items: SiteImage[] = [];
  snap.forEach((d) => items.push(d.data() as SiteImage));
  return items;
}
