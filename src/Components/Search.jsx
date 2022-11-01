import Filters from "./Filters";
import filterData from "../SampleData/filters";
import SearchContent from "./SearchContent";

function Search() {
  return (
    <div className="search-container">
      <div className="filters">
        {filterData.map((data, i) => (
          <Filters {...data} key={i} />
        ))}
      </div>
      <SearchContent />
    </div>
  );
}

export default Search;
