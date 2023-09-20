import { useEffect, useState } from 'react';
import { MovieService } from '../api/movies';
import { MovieInterface } from '../interfaces/movieInterface';

export const useMovie = () => {
  const [movie, setMovie] = useState<MovieInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMoviesById = async () => {
    await setTimeout(async () => {
      const fetchData = await MovieService.getMovieById('346698');
      await setMovie(fetchData);
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getMoviesById();
  }, []);

  return {
    movie,
    isLoading,
  };
};
