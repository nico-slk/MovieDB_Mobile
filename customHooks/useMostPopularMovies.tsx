import { useEffect, useState } from 'react';
import { MovieService } from '../api/movies';
import { MovieListInterface } from '../interfaces/movieListInterface';

const useMostPopularMovies = () => {
  const [mostPopularMovies, setMostPopularMovies] = useState<MovieListInterface>();
  const [isLoadingMostPopularMovies, setIsLoadingMostPopularMovies] = useState<boolean>(true);

  const getMostPopularMovies = async () => {
    await setTimeout(async () => {
      const fetchData = await MovieService.getMostPopularMovies('1');
      await setMostPopularMovies(fetchData);
      setIsLoadingMostPopularMovies(false);
    }, 3000);
  };

  useEffect(() => {
    getMostPopularMovies();
  }, []);

  return {
    mostPopularMovies,
    isLoadingMostPopularMovies,
  };

};

export default useMostPopularMovies;
