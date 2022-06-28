import { useEffect, useState } from 'react';

export const useLectures = (fb: any, overrideQuery = {}) => {
  const [lastSnapshot, setLastSnapshot] = useState(null);
  const [lectureQuery, updateLectureQuery] = useState({
    filter: '',
    language: 'English',
    speaker: '',
    playlistName: '',
    ...overrideQuery
  });
  const [paginating, setPaginating] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { payload, updatedLastVisible } = await fb.lectures.fetch({
      ...lectureQuery,
      lastVisible: null,
    });
    setLastSnapshot(updatedLastVisible);
    setData(payload);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchData();
    } catch (err) {
      console.log('errerrerrerr', err);
      // TODO: Handle error
    } finally {
      setRefreshing(false);
    }
  };

  const onFetch = async () => {
    setLoading(true);
    try {
      await fetchData();
    } catch (err) {
      console.log('errerrerrerr', err);
      // TODO: Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onFetch();
  }, [lectureQuery.language, lectureQuery.speaker, lectureQuery.filter, lectureQuery.playlistName]);

  const onPaginateLectures = async () => {
    setPaginating(true);
    if (paginating) return;
    try {
      const { payload, updatedLastVisible } = await fb.lectures.paginate({
        ...lectureQuery,
        lastVisible: lastSnapshot,
      });

      setLastSnapshot(updatedLastVisible);

      // @ts-ignore
      setData(prevState => [...prevState, ...payload]);
    } catch (err) {
      console.log('errerrerrerr', err);
      // TODO: handle error
    } finally {
      setPaginating(false);
    }
  };

  return {
    onPaginateLectures,
    onRefresh,
    refreshing,
    loading,
    lectureQuery,
    data,
    paginating,
    updateLectureQuery,
  };
};
