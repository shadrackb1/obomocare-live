import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { doc, onSnapshot, updateDoc, type DocumentData, type Unsubscribe } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { defaultContent, type SiteContent as SiteContentType } from '../lib/defaultContent';
import { mergeContent } from '../lib/contentFallback';

export type { SiteContentType as SiteContent };

const SITE_CONTENT_ID = 'default';
const COLLECTION = 'siteContent';

type ContentStatus = 'loading' | 'ready' | 'error';

interface SiteContentContextValue {
  content: SiteContentType;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

const SiteContentContext = createContext<SiteContentContextValue>({
  content: defaultContent,
  loading: true,
  error: null,
  refresh: () => {},
});

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContentType>(defaultContent);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState<number>(0);

  useEffect(() => {
    let unsub: Unsubscribe | null = null;

    const docRef = doc(db, COLLECTION, SITE_CONTENT_ID);
    unsub = onSnapshot(
      docRef,
      (snap) => {
        const raw = snap.data() as DocumentData | undefined;
        if (raw && raw.pages) {
          const merged = mergeContent(raw as Partial<SiteContentType>);
          setContent(merged as SiteContentType);
        } else {
          setContent(defaultContent);
        }
        setLoading(false);
        setError(null);
        setVersion((v) => v + 1);
      },
      (err) => {
        if (import.meta.env.DEV) console.warn('[siteContent] Firestore listener error:', err);
        setContent(defaultContent);
        setLoading(false);
        setError(err instanceof Error ? err.message : 'Unknown error');
      },
    );

    return () => unsub?.();
  }, []);

  const refresh = () => setVersion((v) => v + 1);

  return (
    <SiteContentContext.Provider value={{ content, loading, error, refresh }}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent(): SiteContentContextValue {
  return useContext(SiteContentContext);
}

async function updateSiteContentDoc(patch: Record<string, unknown>) {
  const docRef = doc(db, COLLECTION, SITE_CONTENT_ID);
  await updateDoc(docRef, patch);
}

export function useSiteContentMutation() {
  const { refresh } = useSiteContent();

  const update = async (patch: Record<string, unknown>) => {
    try {
      await updateSiteContentDoc(patch);
      refresh();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Save failed';
      throw new Error(message);
    }
  };

  return { update };
}
