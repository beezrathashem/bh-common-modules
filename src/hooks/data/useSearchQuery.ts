import React, { useEffect, useMemo, useState } from 'react';
import { MeiliSearch } from 'meilisearch';
// import { ISearchQuery } from 'bh-common-types/src/Interfaces/Lectures';
import { handleError } from 'bh-common-modules/Errors';

const saveSyncItems = async (storage, searchQuery, data) => {
  await storage.set(searchQuery.id, JSON.stringify(data));
  await storage.set(`${searchQuery.id}-updated-at`, JSON.stringify(searchQuery.updated_at));
};

const useSearchQuery = ({ Firebase, searchQuery, host, apiKey, storage }: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const client = useMemo(
    () =>
      new MeiliSearch({
        host,
        apiKey,
      }),
    [],
  );

  const get_lectures = useMemo(() => client.index('get_lectures'), []);

  const determineDataSet = async (searchQuery: any) => {
    const lastUpdatedAt = JSON.parse(await storage.get(`${searchQuery.id}-updated-at`));
    if (searchQuery.updated_at === lastUpdatedAt) {
      const syncItems = await storage.get(searchQuery.id);
      if (syncItems) return JSON.parse(syncItems);
    }
    let res: any[];
    if (searchQuery.isLatest) {
      res = await Firebase.lectures.fetchLatest();
    } else if (searchQuery.isFirebase) {
      res = (await Firebase.lectures.fetchByQuery(searchQuery.value)).payload;
    } else if (searchQuery.isByPlaylist) {
      res = (await Firebase.lectures.fetchByQuery(searchQuery.value, 'playlistId')).payload;
    } else {
      res = (
        await get_lectures.search(searchQuery.value, {
          hitsPerPage: 15,
        })
      ).hits;
    }
    await saveSyncItems(storage, searchQuery, res);
    return res;
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await determineDataSet(searchQuery);
      setData(res);
    } catch (err) {
      handleError(err, 'searchQuery', 'fetchSearchQuery');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useSearchQuery;
