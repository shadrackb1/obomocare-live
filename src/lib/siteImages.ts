import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  Timestamp,
  query,
  limit,
} from 'firebase/firestore';
import { db } from './firebase';

export { onSnapshot, collection, query, limit } from 'firebase/firestore';
export { db } from './firebase';

const COLLECTION = 'siteImages';

export interface SiteImage {
  slot: string;
  url: string;
  label: string;
  description?: string;
  updatedAt: Timestamp | null;
}

export async function saveSiteImage(slot: string, url: string, label: string, description?: string) {
  await setDoc(doc(db, COLLECTION, slot), {
    slot,
    url,
    label,
    description: description || '',
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
 * Get all stored media entries from Firestore (for admin panel).
 */
export async function getMediaLibrary(): Promise<SiteImage[]> {
  const snap = await getDocs(collection(db, COLLECTION));
  const items: SiteImage[] = [];
  snap.forEach((d) => items.push(d.data() as SiteImage));
  return items;
}
