import Firebase from './Firebase';
import { initDB } from './Firebase/db';

export const initFirebase = (firestore: any) => {
  initDB(firestore);
  return Firebase;
};
