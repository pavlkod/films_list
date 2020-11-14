import { useState } from "react";

const MovieItem = ({ data, removeItem, addMovieToWillWatch, removieMovieFromWillWatch }) => {
  const [willWatches, setWillWatches] = useState(false);
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https:image.tmdb.org/t/p/w500${data.backdrop_path || data.poster_path}`}
        alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{data.title}</h6>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p className="mb-0">Rating: {data.vote_average}</p>
          {willWatches ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setWillWatches(false);
                removieMovieFromWillWatch.bind(null, data)();
              }}
            >
              Remove will Watch
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setWillWatches(true);
                addMovieToWillWatch.bind(null, data)();
              }}
            >
              Add will Watch
            </button>
          )}
        </div>
        <button onClick={removeItem.bind(null, data)}>Delete item</button>
      </div>
    </div>
  );
};

export { MovieItem };
