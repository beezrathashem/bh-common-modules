import { useEffect, useState } from 'react';

const useQuestions = (fb: any, user_id = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginating, setPaginating] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [lastSnapshot, setLastSnapshot] = useState(null);
  const [error, setError] = useState(null);
  const [questionQuery, updateQuestionQuery] = useState({
    language: '',
    filter: '',
    speaker: '',
    isUnanswered: false,
    user_id
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = user_id ? fb.questions.fetchUser : fb.questions.fetch
      const res = await  query({
        ...questionQuery,
        lastVisible: null,
      });
      console.log({
        res
      })
      setData(res.payload);
      setLastSnapshot(res.updatedLastVisible);
    } finally {
      setLoading(false);
    }
  };

  const refresh = async () => {
    setRefreshing(true);
    try {
      const query = user_id ? fb.questions.fetchUser : fb.questions.fetch
      const res = await query({
        ...questionQuery,
        lastVisible: null,
      });
      setData(res.payload);
      setLastSnapshot(res.updatedLastVisible);
    } finally {
      setRefreshing(false);
    }
  };

  const fetchMore = async () => {
    if (data.length === 0) return;
    if (paginating) return;
    setPaginating(true);
    try {
      const query = user_id ? fb.questions.fetchUser : fb.questions.paginate
      const res = await query({
        ...questionQuery,
        lastVisible: lastSnapshot,
      });

      if (res.updatedLastVisible) {
        setLastSnapshot(res.updatedLastVisible);
        // @ts-ignore
        setData(prevState => [...prevState, ...res.payload]);
      }
    } catch (err) {
      console.log('wooops', err);
    } finally {
      setPaginating(false);
    }
  };

  const submitQuestion = async question => {
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      await fb.questions.createQ({
        ...question,
        speaker: 'UCi-fAdFBv83gUzBgKm3PAyw',
        speaker_image_url:
          'https://lh3.googleusercontent.com/-Im-7BLJyKts/AAAAAAAAAAI/AAAAAAAAAAo/HD1drokwFAc/photo.jpg',
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const answerQuestion = async question => {
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      await fb.questions.answerQ(question);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteQuestion = async question => {
    if (loading) return;
    setError(null);
    setLoading(true);
    try {
      await fb.questions.deleteQ(question);
      setData(data.filter(i => i.id !== question.id));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      fetchData();
  }, [questionQuery.filter, questionQuery.isUnanswered]);

  return {
    data,
    loading,
    refresh,
    refreshing,
    paginating,
    fetchMore,
    questionQuery,
    updateQuestionQuery,
    error,
    submitQuestion,
    deleteQuestion,
    answerQuestion,
  };
};

export default useQuestions;
