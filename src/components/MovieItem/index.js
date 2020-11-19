import { useState } from "react";

const MovieItem = ({
  data: { movie, moviesWillWatch },
  removeItem,
  addMovieToWillWatch,
  removieMovieFromWillWatch,
}) => {
  const [willWatches, setWillWatches] = useState(false);
  return (
    <div className="card">
      {movie.backdrop_path && movie.poster_path && (
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
          alt=""
        />
      )}
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="mb-0">Рейтинг: {movie.vote_average}</p>
          {willWatches || moviesWillWatch.find(item => item.id === movie.id) ? (
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                setWillWatches(false);
                removieMovieFromWillWatch.bind(null, movie)();
              }}
            >
              Удалить из просмотра
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setWillWatches(true);
                addMovieToWillWatch.bind(null, movie)();
              }}
            >
              Добавить к просмотру
            </button>
          )}
        </div>
        <button className="btn btn-danger" onClick={removeItem.bind(null, movie)}>
          Удалить фильм
        </button>
      </div>
    </div>
  );
};

export { MovieItem };
