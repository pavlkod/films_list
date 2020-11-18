import "./index.scss";
const MovieListWillWatch = ({ data }) => {
  return (
    <>
      <p>К просмотру: {data.length}</p>
      {data.length > 0 && (
        <ul className="list-group">
          {data.map(item => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
              {item.title}
              <span>{item.vote_average}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export { MovieListWillWatch };
