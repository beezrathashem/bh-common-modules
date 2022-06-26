import { formatSnapshotData } from './procedures';

export default (dp: any) => ({
  fetch: async () => {
    const snapshot = await dp.playlistsDB.get();
    const formattedSnapshot = formatSnapshotData(snapshot);
    return {
      ...formattedSnapshot,
      payload: formattedSnapshot.payload,
    };
  },
});
