import { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  userId: string;
  config: any;
  lectureId: string;
};

export const useVideoViews = ({ userId, config, lectureId }: Props) => {
  const [views, setViews] = useState(null);
  const getViews = async () => {
    // todo: call endpoint to check for updates with user identifier (prob device id or ip)
    const views = await axios.get(`${config.backend_endpoint}/lectures/views?userId=${userId}&lectureId=${lectureId}`);
    setViews(views);
  };

  useEffect(() => {
    getViews();
  }, []);
  return { views };
};
