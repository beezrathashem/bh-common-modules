import { useEffect, useState } from 'react';

export const useSpeakers = (fb: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchQueries = async () => {
    setLoading(true);
    try {
      const { payload } = await fb.speakers.fetch();
      setData(payload);
    } catch (err) {
      console.log('errerrerrerr', err);
      // TODO: Handle error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return {
    data,
    loading,
  };
};
