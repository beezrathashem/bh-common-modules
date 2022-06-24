// import { ILectureQuery } from 'bh-common-types/src/Interfaces/Lectures';
import procedures, { formatSnapshotData } from './procedures';

type ILectureQuery = any;

const orderBy = 'date';
const filter = 'playlistId';

export default (dp: any) => ({
  fetch: async (lectureQuery: ILectureQuery) => {
    return await procedures.fetch({ query: lectureQuery, db: dp.lecturesDB, orderBy, filter });
  },
  paginate: async (lectureQuery: ILectureQuery) => {
    return await procedures.paginate({ query: lectureQuery, db: dp.lecturesDB, orderBy, filter });
  },
  fetchById: async (id: string) => {
    const doc = await dp.lecturesDB.doc(id).get();
    return {
      ...doc.data(),
      id: doc.id,
    };
  },
  updateLecture: async (id: string, { playlistId, playlist }: { playlist: string; playlistId: string }) => {
    await dp.lecturesDB.doc(id).update({
      playlistId,
      playlist,
    });
    return 'success';
  },
  fetchByTitle: async (title: string) => {
    const snapshot = await dp.lecturesDB.where('title', '==', title).limit(1).get();

    return await new Promise(async function (resolve) {
      if (snapshot.empty) {
        resolve(null);
        return;
      }
      snapshot.forEach(function (doc: any) {
        const docData = doc.data();
        return resolve({ ...docData, id: doc.id });
      });
    });
  },
  fetchByQuery: async (query: string, searchKey: string = 'query', lastVisible: any) => {
    let queryConstruct = dp.lecturesDB.where(searchKey, '==', query);
    if (lastVisible) {
      queryConstruct = dp.lecturesDB.where(searchKey, '==', query).startAfter(lastVisible);
    }
    const snapshot = await queryConstruct.limit(20).get();
    return await new Promise(async function (resolve) {
      if (snapshot.empty) {
        resolve([]);
        return;
      }
      resolve(formatSnapshotData(snapshot));
    });
  },
  fetchLatest: async (limit = 20) => {
    const snapshot = await dp.lecturesDB.orderBy('date', 'desc').limit(limit).get();
    const data: any = [];
    return await new Promise(async function (resolve) {
      if (snapshot.empty) {
        resolve(null);
        return;
      }
      snapshot.forEach(function (doc: any) {
        const docData = doc.data();
        data.push({ ...docData, id: doc.id });
      });
      return resolve(data);
    });
  },
});
