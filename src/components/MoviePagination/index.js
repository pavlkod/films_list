import classnames from "classnames";
import "./index.scss";

const MoviePagination = ({ data: { page, totalPages }, changePage }) => {
  const prevPage = page - 1;
  const nextPage = page + 1;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li
          className={classnames("page-item", "page-item--hover", { disabled: page <= 1 })}
          onClick={changePage.bind(null, prevPage, totalPages)}
          data-page={prevPage}
        >
          <span className="page-link" tabIndex="-1">
            Назад
          </span>
        </li>
        <li className="page-item">
          <span className="page-link">{page}</span>
        </li>
        <li className="page-item">
          <span className="page-link">{totalPages}</span>
        </li>
        <li
          className={classnames("page-item", "page-item--hover", { disabled: page >= totalPages })}
          onClick={changePage.bind(null, nextPage, totalPages)}
          data-page={nextPage}
        >
          <span className="page-link">Вперед</span>
        </li>
      </ul>
    </nav>
  );
};
export { MoviePagination };
