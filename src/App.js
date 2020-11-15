import { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList";
import { moviesData } from "./db/moviesData";

import "./components/MovieListWillWatch/index.scss";
import { MovieListWillWatch } from "./components/MovieListWillWatch";
import { API_KEY_3, API_URL } from "./utils/app";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesWillWatch, setMoviesWillWatch] = useState([]);

  useEffect(() => {
    console.log("moubt");
    const fun = async () => {
      try {
        const response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`);
        const { results } = await response.json();
        console.log(results);
        setMovies(results);
      } catch (e) {}
    };
    fun();
    // fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}`);
  }, []);

  const removeItem = data => {
    const filterMovies = movies.filter(movie => movie.id !== data.id);
    setMovies(filterMovies);
  };
  const removieMovieFromWillWatch = data => {
    const filterMovies = moviesWillWatch.filter(movie => movie.id !== data.id);
    setMoviesWillWatch(filterMovies);
  };

  const addMovieToWillWatch = movie => setMoviesWillWatch([...moviesWillWatch, movie]);

  return (
    <div className="App container mt-5">
      <div className="row">
        <div className="col-9">
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
