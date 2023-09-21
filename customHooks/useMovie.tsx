import { useEffect, useState } from 'react';
import { MovieService } from '../api/movies';
import { Movie } from '../interfaces/movieListInterface';

interface MovieState {
  mostPopular: Movie[];
  topRated: Movie[];
  playingNow: Movie[];
  // movie: MovieInterface;
}

export const useMovie = () => {
  const [movieState, setMovieState] = useState<MovieState>({
    mostPopular: [],
    topRated: [],
    playingNow: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = async () => {

    const mostPopularPromise = MovieService.getMostPopularMovies('1');
    const topRatedPromise = MovieService.getPlayingNowMovies('1');
    const playingNowPromise = MovieService.getTopRatedMovies('1');
    // const moviePromise = MovieService.getMovieById('346698');

    const resp = await Promise.all([
      mostPopularPromise,
      topRatedPromise,
      playingNowPromise,
      // moviePromise,
    ]);

    setMovieState({
      mostPopular: resp[0].results,
      topRated: resp[1].results,
      playingNow: resp[2].results,
      // movie: resp[3],
    });

    setIsLoading(false);

  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movieState,
    isLoading,
  };
};
