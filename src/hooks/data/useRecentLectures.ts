import { useEffect, useState } from 'react';
import { AsyncItems } from '../../lib/AsyncItems';

type Props = {
  storage: {
    set: any;
    get: any;
  };
  lecture?: any;
};

export const useRecentLectures = ({ storage, lecture }: Props) => {
  const [data, setData] = useState([]);

  const getLectures = async () => {
    if (lecture && (lecture.isLiveVideo || lecture.is_live || lecture.lectureUrl.includes('mux'))) return;
    const resRaw = await storage.get(AsyncItems.recent_lectures);
    const res = JSON.parse(resRaw) || [];

    if (lecture && lecture.id) {
      const newLecture = lecture;
      newLecture.description = '';

      const dataToUpdate = res.filter(i => lecture.id !== i.id);
      const filteredLectures = [newLecture, ...dataToUpdate];
      await storage.set(AsyncItems.recent_lectures, JSON.stringify(filteredLectures.slice(0, 5)));
    }
    if (res) {
      setData(res);
    }
  };

  useEffect(() => {
    getLectures();
  }, []);

  return {
    data,
  };
};
