import { useContext } from "react";
import ActiveTagContext from "../../Context/ActiveTagContext";
import SearchItem from "./SearchItem";

function SearchList() {
  const { foundGroups } = useContext(ActiveTagContext);
  return (
    <div>
      <h3>Found Groups:</h3>
      {foundGroups.map((group, i) => {
        return (
          <div key={group.Leader}>
            <SearchItem group={group} />
          </div>
        );
        // console.log(leaderArr);
      })}
      {/* {foundGroups.map((group, i) => {
        const leaderArr = group.map((group) => `${group.Leader}`);
        console.log(leaderArr);
        return (
          <div key={i}>
            <SearchItem group={group[0]} />
          </div>
        );
      })} */}
    </div>
  );
}

export default SearchList;
