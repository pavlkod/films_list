import { useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const changePage = (page, totalPage) => {
    if (!page || page > totalPage) {
      return;
    }
    setPage(page);
  };

  return { page, changePage };
};
export { usePagination };
