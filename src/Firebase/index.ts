import { initDB } from './db';
import questions from './questions';
import topics from './topics';
import lectures from './lectures';
import searchQueries from './searchQueries';
import livestreams from './livestreams';
import playlists from './playlists';
import speakers from './speakers';

export const initFirebase = (firestore: any) => {
  const dp = initDB(firestore);
  return {
    lectures: lectures(dp),
    questions: questions(dp),
    topics: topics(dp),
    speakers: speakers(dp),
    searchQueries: searchQueries(dp),
    livestreams: livestreams(dp),
    playlists: playlists(dp),
  };
};
