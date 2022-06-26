import { useEffect, useState } from 'react';

export const useTopics = (fb: any) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchQueries = async () => {
    setLoading(true);
    try {
      const { payload } = await fb.topics.fetch();
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
    // side effect for change in topic
  }, []);

  return {
    data,
    loading,
  };
};
