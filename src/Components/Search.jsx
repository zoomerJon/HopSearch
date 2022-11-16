import Filters from "./Filters";
import filterData from "../SampleData/filters";
import SearchContent from "./SearchContent";

function Search() {
  return (
    <div className="search-container">
      <div className="mobile-search-header">
        <h1>Find a Group!</h1>
        <p>There's a group for you here</p>
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
