import classnames from "classnames";

const MovieTabs = ({ sort_by, changeSort }) => {
  const tabs = [
    {
      name: "Популярность",
      sort: "popularity.desc",
    },
    {
      name: "Доход",
      sort: "revenue.desc",
    },
    {
      name: "Средняя оценка",
      sort: "vote_average.desc",
    },
  ];
  return (
    <ul className="tabs nav nav-pills">
      {tabs.map((item, index) => {
        return (
          <li className="nav-item" onClick={changeSort.bind(null, item.sort)} key={index}>
            <div className={classnames("nav-link", { active: sort_by === item.sort })}>{item.name}</div>
          </li>
        );
      })}
    </ul>
  );
};

export { MovieTabs };
