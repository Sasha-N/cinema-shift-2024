export const fetchMovies = async () => {
  const response = await fetch('https://shift-backend.onrender.com/cinema/today');
  return response.json();
};

export const fetchMovieById = async (id: string) => {
  const response = await fetch(`https://shift-backend.onrender.com/cinema/film/${id}`);
  return response.json();
}