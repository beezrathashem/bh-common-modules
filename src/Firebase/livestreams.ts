import { formatSnapshotData } from './procedures';

export default (dp: any) => ({
  fetch: async () => {
    const snapshot = await dp.livestreamsDB.get();
    const formattedSnapshot = formatSnapshotData(snapshot);
    return {
      ...formattedSnapshot,
      payload: formattedSnapshot.payload.sort((a: any, b: any) => b.ordinal - a.ordinal),
    };
  },
  fetchById: async (id: string) => {
    const doc = await dp.livestreamsDB.doc(id).get();
    return {
      ...doc.data(),
      id: doc.id,
    };
  },
  fetchFirst: async () => {
    const snapshot = await dp.livestreamsDB.get();
    const formattedSnapshot = formatSnapshotData(snapshot);
    return formattedSnapshot.payload.length ? formattedSnapshot.payload[0] : null;
  },
});
