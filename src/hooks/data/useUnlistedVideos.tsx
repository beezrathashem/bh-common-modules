import { useState, useEffect } from 'react';
import { fetchPostJSON } from 'common-web/src/utils/api-helpers';
import { BACKEND_URL } from 'bh-panel/utils/UploadUtils';

const CHANNELS = {
  rabbimizrachi: 'UCY_RXl0nXVp4w3VpEwsNhUg',
  rabbireuven: 'UCi-fAdFBv83gUzBgKm3PAyw',
  rabbikahlon: 'UC5PoXpwCMBfuq1HbsnSWjmA',
};

const useUnlistedVideos = (author: 'rabbimizrachi' | 'rabbireuven' | 'rabbikahlon') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchPostJSON(`${BACKEND_URL[author]}/conversions/unlisted-videos`, {
        channel_id: CHANNELS[author],
      });
      setData(res.videos);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useUnlistedVideos;
