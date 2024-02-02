export const fetchMovies = async () => {
  const response = await fetch('https://shift-backend.onrender.com/cinema/today');
  return response.json();
};