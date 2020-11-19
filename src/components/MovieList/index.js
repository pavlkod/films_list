import { MovieItem } from "../MovieItem";

const MovieList = ({
  data: { movies, moviesWillWatch },
  removeItem,
  addMovieToWillWatch,
  removieMovieFromWillWatch,
}) => {
  return (
    <>
      {movies.map(movie => (
        <div className="col-6 mb-4" key={movie.id}>
          <MovieItem
            data={{ movie, moviesWillWatch }}
            removeItem={removeItem}
            addMovieToWillWatch={addMovieToWillWatch}
            removieMovieFromWillWatch={removieMovieFromWillWatch}
          />
        </div>
      ))}
    </>
  );
};

export { MovieList };
