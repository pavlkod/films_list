import { MovieItem } from "../MovieItem";

const MovieList = ({ data, removeItem, addMovieToWillWatch, removieMovieFromWillWatch }) => {
  return (
    <>
      {data.map(movie => (
        <div className="col-6 mb-4" key={movie.id}>
          <MovieItem
            data={movie}
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
