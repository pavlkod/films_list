import { useState } from "react";

const useChangeSort = () => {
  const [sortBy, setSortBy] = useState("popularity.desc");

  const changeSort = value => setSortBy(value);

  return { sortBy, changeSort };
};
export { useChangeSort };
