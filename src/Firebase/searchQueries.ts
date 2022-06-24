import { formatSnapshotData } from './procedures';

export default (dp: any) => ({
  fetch: async () => {
    const snapshot = await dp.searchQueriesDB.get();
    const formattedSnapshot = formatSnapshotData(snapshot);
    return {
      ...formattedSnapshot,
      payload: formattedSnapshot.payload.sort((a: any, b: any) => b.ordinal - a.ordinal),
    };
  },
});
