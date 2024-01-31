import { useQuery } from 'react-query';

const fetchMovies = async () => {
  const response = await fetch('https://shift-backend.onrender.com/cinema/today');
  const result = await response.json();
  return result;
};

export const useMovies = () => {
    return useQuery('movies', fetchMovies);
}