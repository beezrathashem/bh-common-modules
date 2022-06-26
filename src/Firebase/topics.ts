import procedures from './procedures';

export default (dp: any) => ({
  fetch: async () => {
    return await procedures.fetch({ query: {}, db: dp.topicsDB, orderBy: 'timestamp', filter: '' });
  },
});
