import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { db } from './firebase';

export { db } from './firebase';

const COLLECTION = 'teamMembers';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSlot: string;
  bio: string;
  motto?: string;
  isLeader: boolean;
  order: number;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const q = query(collection(db, COLLECTION), orderBy('order', 'asc'));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as TeamMember));
}

export async function getTeamMember(id: string): Promise<TeamMember | null> {
  const ref = doc(db, COLLECTION, id);
  const snap = await getDocs(collection(db, COLLECTION));
  const doc_ = snap.docs.find((d) => d.id === id);
  if (!doc_) return null;
  return { id: doc_.id, ...doc_.data() } as TeamMember;
}

export async function saveTeamMember(member: TeamMember) {
  const id = member.id || doc(collection(db, COLLECTION)).id;
  const ref = doc(db, COLLECTION, id);
  const toSave: Record<string, unknown> = {
    name: member.name,
    role: member.role,
    imageSlot: member.imageSlot,
    bio: member.bio,
    motto: member.motto || '',
    isLeader: member.isLeader,
    order: member.order,
  };
  await setDoc(ref, toSave, { merge: true });
  return id;
}

export async function deleteTeamMember(id: string) {
  await deleteDoc(doc(db, COLLECTION, id));
}
