import { useEffect, useState } from 'react';
import { MovieService } from '../api/movies';
import { MovieListInterface } from '../interfaces/movieListInterface';

const useMoviesList = () => {
  const [moviesList, setMoviesList] = useState<MovieListInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTopRatedMovies = async () => {
    await setTimeout(async () => {
      const fetchData = await MovieService.getTopRatedMovies('1');
      await setMoviesList(fetchData);
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return {
    moviesList,
    isLoading,
  };

};

export default useMoviesList;
