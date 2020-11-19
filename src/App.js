import { useEffect, useState } from "react";

import { MovieList } from "./components/MovieList";
import { MovieListWillWatch } from "./components/MovieListWillWatch";
import { MovieTabs } from "./components/MovieTabs";
import { MoviePagination } from "./components/MoviePagination";

import { useMoviesWillWatch } from "./hooks/useMoviesWillWatch";
import { usePagination } from "./hooks/usePagination";

import { API_KEY_3, API_URL } from "./utils/app";
import { useChangeSort } from "./hooks/useChangeSort";

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const { moviesWillWatch, addMovieToWillWatch, removieMovieFromWillWatch } = useMoviesWillWatch();
  const { page, changePage } = usePagination();
  const { sortBy, changeSort } = useChangeSort();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sortBy}&language=ru-RU&page=${page}`
        );
        const { results, total_pages } = await response.json();

        setMovies(results);
        setTotalPages(total_pages);
      } catch (e) {
        console.error(e);
      }
    };
    getMovies();
  }, [sortBy, page]);

  const removeItem = data => {
    const filterMovies = movies.filter(movie => movie.id !== data.id);
    setMovies(filterMovies);

    removieMovieFromWillWatch(data);
  };

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
              data={{ movies, moviesWillWatch }}
              removeItem={removeItem}
              addMovieToWillWatch={addMovieToWillWatch}
              removieMovieFromWillWatch={removieMovieFromWillWatch}
            />
            {totalPages > 1 && <MoviePagination data={{ page, totalPages }} changePage={changePage} />}
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
