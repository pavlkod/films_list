import { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList";

import "./components/MovieListWillWatch/index.scss";
import { MovieListWillWatch } from "./components/MovieListWillWatch";
import { API_KEY_3, API_URL } from "./utils/app";
import { MovieTabs } from "./components/MovieTabs";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesWillWatch, setMoviesWillWatch] = useState([]);
  const [sortBy, setSortBy] = useState("popularity.desc");

  useEffect(() => {
    const fun = async () => {
      try {
        const response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}`);
        const { results } = await response.json();

        setMovies(results);
      } catch (e) {}
    };
    fun();
  }, [sortBy]);

  const removeItem = data => {
    const filterMovies = movies.filter(movie => movie.id !== data.id);
    setMovies(filterMovies);
  };
  const removieMovieFromWillWatch = data => {
    const filterMovies = moviesWillWatch.filter(movie => movie.id !== data.id);
    setMoviesWillWatch(filterMovies);
  };

  const addMovieToWillWatch = movie => setMoviesWillWatch([...moviesWillWatch, movie]);

  const changeSort = value => setSortBy(value);

  return (
    <div className="App container mt-5">
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col-12 mb-4">
              <MovieTabs sort_by={sortBy} changeSort={changeSort} />
            </div>
          </div>
          <div className="row">
            <MovieList
              data={movies}
              removeItem={removeItem}
              addMovieToWillWatch={addMovieToWillWatch}
              removieMovieFromWillWatch={removieMovieFromWillWatch}
            />
          </div>
        </div>
        <div className="col-3">
          <div className="sticky-block">
            <MovieListWillWatch data={moviesWillWatch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
