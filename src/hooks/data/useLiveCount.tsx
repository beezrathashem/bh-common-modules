import { useState, useEffect } from 'react';

const useLiveCount = () => {
  const [count, setCount] = useState(23);

  useEffect(() => {
    // start count

    setCount(23);
  }, []);

  return {
    count,
  };
};

export default useLiveCount;
