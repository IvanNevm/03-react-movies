import axios from 'axios';
import type { Movie } from '../types/movie';

interface MoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: { query },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  };

  const response = await axios.get<MoviesResponse>(
    'https://api.themoviedb.org/3/search/movie',
    config
  );

  return response.data.results;
};
