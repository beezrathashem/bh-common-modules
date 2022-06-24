import { useState, useEffect } from 'react';
import { fetchPostJSON } from 'common-web/src/utils/api-helpers';
import { BACKEND_URL } from 'bh-panel/utils/UploadUtils';
import Firebase from 'common-web/src/lib/Firebase';

const CHANNELS = {
  rabbimizrachi: 'UCY_RXl0nXVp4w3VpEwsNhUg',
  rabbireuven: 'UCi-fAdFBv83gUzBgKm3PAyw',
  rabbikahlon: 'UC5PoXpwCMBfuq1HbsnSWjmA',
};

const useUncategorizedVideos = (Firebase: any, author: 'rabbimizrachi' | 'rabbireuven' | 'rabbikahlon') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginating, setPaginating] = useState(false);
  const [error, setError] = useState(null);
  const [lastVisible, setLastVisible] = useState(null);

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const d = await Firebase.lectures.fetchByQuery('General', 'playlist');
      setData(d.payload);
      if (d.updatedLastVisible) {
        setLastVisible(d.updatedLastVisible);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const paginate = async () => {
    if (paginating) return;
    setPaginating(true);
    setError(null);
    try {
      const d = await Firebase.lectures.fetchByQuery('General', 'playlist', lastVisible);
      // @ts-ignore
      setData(prevState => [...prevState, ...d.payload]);
      if (d.updatedLastVisible) {
        setLastVisible(d.updatedLastVisible);
      }
    } catch (err) {
      setError(err);
    } finally {
      setPaginating(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, paginate, paginating };
};

export default useUncategorizedVideos;
