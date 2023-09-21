import { useEffect, useState } from 'react';
import { MovieService } from '../api/movies';
import { MovieListInterface } from '../interfaces/movieListInterface';

const usePlayingNowMovies = () => {
  const [playingNowMovies, setPlayingNowMovies] = useState<MovieListInterface>();
  const [isLoadingPlayingNowMovies, setIsLoadingPlayingNowMovies] = useState<boolean>(true);

  const getPlayingNowMovies = async () => {
    await setTimeout(async () => {
      const fetchData = await MovieService.getPlayingNowMovies('1');
      await setPlayingNowMovies(fetchData);
      setIsLoadingPlayingNowMovies(false);
    }, 3000);
  };

  useEffect(() => {
    getPlayingNowMovies();
  }, []);

  return {
    playingNowMovies,
    isLoadingPlayingNowMovies,
  };

};

export default usePlayingNowMovies;
