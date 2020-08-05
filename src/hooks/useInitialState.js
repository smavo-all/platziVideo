import { useEffect, useState } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    window
      .fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  return videos;
};

export default useInitialState;
