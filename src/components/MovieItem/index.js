import { useState } from "react";

const MovieItem = ({ data, removeItem, addMovieToWillWatch, removieMovieFromWillWatch }) => {
  const [willWatches, setWillWatches] = useState(false);
  return (
    <div className="card">
      {data.backdrop_path && data.poster_path && (
        <img
          className="card-img-top"
          src={`https:image.tmdb.org/t/p/w500${data.backdrop_path || data.poster_path}`}
          alt=""
        />
      )}
      <div className="card-body">
        <h6 className="card-title">{data.title}</h6>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="mb-0">Рейтинг: {data.vote_average}</p>
          {willWatches ? (
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                setWillWatches(false);
                removieMovieFromWillWatch.bind(null, data)();
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
                addMovieToWillWatch.bind(null, data)();
              }}
            >
              Добавить к просмотру
            </button>
          )}
        </div>
        <button className="btn btn-danger" onClick={removeItem.bind(null, data)}>
          Удалить фильм
        </button>
      </div>
    </div>
  );
};

export { MovieItem };
