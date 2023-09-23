import { API_KEY } from '@env';

const URL_MOVIE = 'https://api.themoviedb.org/3/movie';

export const MovieService = {
  getMovieById: async (id: string) => {
    try {
      const fetchData = await fetch(`${URL_MOVIE}/${id}?api_key=${API_KEY}`);
      const resp = await fetchData.json();
      return resp;
    } catch (e) {
      let message = 'Unknown Error';
      if (e instanceof Error) { message = e.message; }
      throw new Error(message);
    }
  },
  getTopRatedMovies: async (page: string) => {
    try {
      const fetchData = await fetch(`${URL_MOVIE}/top_rated?api_key=${API_KEY}&page=${page}`);
      const resp = await fetchData.json();
      return resp;
    } catch (e) {
      let message = 'Unknown Error';
      if (e instanceof Error) { message = e.message; }
      throw new Error(message);
    }
  },
  getPlayingNowMovies: async (page: string) => {
    try {
      const fetchData = await fetch(`${URL_MOVIE}/now_playing?api_key=${API_KEY}&page=${page}`);
      const resp = await fetchData.json();
      return resp;
    } catch (e) {
      let message = 'Unknown Error';
      if (e instanceof Error) { message = e.message; }
      throw new Error(message);
    }
  },
  getMostPopularMovies: async (page: string) => {
    try {
      const fetchData = await fetch(`${URL_MOVIE}/popular?api_key=${API_KEY}&page=${page}`);
      const resp = await fetchData.json();
      return resp;
    } catch (e) {
      let message = 'Unknown Error';
      if (e instanceof Error) { message = e.message; }
      throw new Error(message);
    }
  },
  getUpcomingMovies: async (page: string) => {
    try {
      const fetchData = await fetch(`${URL_MOVIE}/upcoming?api_key=${API_KEY}&page=${page}`);
      const resp = await fetchData.json();
      return resp;
    } catch (e) {
      let message = 'Unknown Error';
      if (e instanceof Error) { message = e.message; }
      throw new Error(message);
    }
  },
};
