import Filters from "./Filters";
import filterData from "../Data/filters";
import SearchContent from "./SearchContent";

function Search() {
  return (
    <div className="search-container">
      <div className="mobile-search-header">
        <h1>Encuentra Un Grupo Aquí!</h1>
        <p>Hay Un Grupo Para Ti</p>
      </div>
      <div className="filters overflow">
        {filterData.map((data, i) => (
          <Filters {...data} key={i} />
        ))}
      </div>
      <SearchContent />
    </div>
  );
}

export default Search;
