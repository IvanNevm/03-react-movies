import axios from 'axios';
import type { Movie } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/4/search/movie';
const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(API_URL, {
    params: { query },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return response.data.results;
};
