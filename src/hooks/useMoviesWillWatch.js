import { useState } from "react";

const useMoviesWillWatch = () => {
  const [moviesWillWatch, setMoviesWillWatch] = useState([]);
  const removieMovieFromWillWatch = data => {
    const filterMovies = moviesWillWatch.filter(movie => movie.id !== data.id);
    setMoviesWillWatch(filterMovies);
  };

  const addMovieToWillWatch = movie => setMoviesWillWatch([...moviesWillWatch, movie]);

  return {
    moviesWillWatch,
    setMoviesWillWatch,
    removieMovieFromWillWatch,
    addMovieToWillWatch,
  };
};
export { useMoviesWillWatch };
