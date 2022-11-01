import { useContext } from "react";
import ActiveTagContext from "../Context/ActiveTagContext";
import ActiveTags from "./SearchComponents/ActiveTags";
import SearchList from "./SearchComponents/SearchList";

function SearchContent() {
  const { tagsActive } = useContext(ActiveTagContext);

  return (
    <div className="search-content">
      <h1>Find a Group!</h1>
      <p>There's a group for you here</p>
      {!tagsActive && (
        <>
          <br />
          <h3>Collections</h3>
          <br />
          <>
            <img
              src={require("../Images/Group-Images/everyone.jpg")}
              alt=""
              height="150px"
            />
            <img
              src={require("../Images/Group-Images/married.jpg")}
              alt=""
              height="150px"
            />
            <img
              src={require("../Images/Group-Images/youth.jpg")}
              alt=""
              height="150px"
            />
            <img
              src={require("../Images/Group-Images/men.jpg")}
              alt=""
              height="150px"
            />
          </>
        </>
      )}
      {tagsActive && <ActiveTags />}
      {tagsActive && <SearchList />}
    </div>
  );
}

export default SearchContent;
