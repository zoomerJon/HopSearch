import { useContext } from "react";
import ActiveTagContext from "../Context/ActiveTagContext";
import ActiveTags from "./SearchComponents/ActiveTags";
import NewGroups from "./SearchComponents/NewGroups";
import SearchList from "./SearchComponents/SearchList";

function SearchContent() {
  const { setTag, tagsActive } = useContext(ActiveTagContext);

  const searchTag = (filter, tag) => {
    setTag(filter, tag);
    document
      .getElementsByClassName(`${tag.replace(/\s+/g, "")}`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`${filter}-clear`)[0]
      .classList.remove("hide");
  };

  const setYouthTags = () => {
    document
      .getElementsByClassName(`Demographic-clear`)[0]
      .classList.remove("hide");
    setTag("Demographic", "All Youth");
    setTag("Demographic", "Adolescents (9-13)");
    setTag("Demographic", "Youth (14-21)");
    document.getElementsByClassName(`AllYouth`)[0].classList.add("active");
    document
      .getElementsByClassName(`Adolescents(9-13)`)[0]
      .classList.add("active");
    document.getElementsByClassName(`Youth(14-21)`)[0].classList.add("active");
  };

  const setMarriedTags = () => {
    document
      .getElementsByClassName(`Demographic-clear`)[0]
      .classList.remove("hide");
    setTag("Demographic", "Married Couples (Mixed)");
    setTag("Demographic", "Married Couples (Young Adults)");
    setTag("Demographic", "Married Without Children");
    setTag("Demographic", "Married With Children (All ages)");
    setTag("Demographic", "Married With Children (0-8 years)");
    setTag("Demographic", "Married With Children (14-21 years)");
    document
      .getElementsByClassName(`MarriedCouples(Mixed)`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MarriedCouples(YoungAdults)`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MarriedWithoutChildren`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MarriedWithChildren(Allages)`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MarriedWithChildren(0-8years)`)[0]
      .classList.add("active");
    document
      .getElementsByClassName(`MarriedWithChildren(14-21years)`)[0]
      .classList.add("active");
  };
  return (
    <div className="search-content">
      <div className="search-header">
        <h1>Find a Group!</h1>
        <p>There's a group for you here</p>
      </div>
      {!tagsActive && (
        <>
          <br />
          <h3>Explore Tags</h3>
          <br />
          <div className="image-container">
            <img
              src={require("../Images/Group-Images/everyone.jpg")}
              alt=""
              height="150px"
              onClick={() => searchTag("Demographic", "Everyone Welcome")}
            />
            <img
              src={require("../Images/Group-Images/married.jpg")}
              alt=""
              height="150px"
              onClick={() => setMarriedTags()}
            />
            <img
              src={require("../Images/Group-Images/youth.jpg")}
              alt=""
              height="150px"
              onClick={() => setYouthTags()}
            />
            <img
              src={require("../Images/Group-Images/men.jpg")}
              alt=""
              height="150px"
              onClick={() => searchTag("Gender", "Male")}
            />
            <img
              src={require("../Images/Group-Images/zoom.jpg")}
              alt=""
              height="150px"
              onClick={() => searchTag("InPerson", "Virtual")}
            />
            <img
              src={require("../Images/Group-Images/women.jpg")}
              alt=""
              height="150px"
              onClick={() => searchTag("Gender", "Female")}
            />
          </div>

          <div className="image-container">
            {/* <img
              src={require("../Images/Group-Images/men.jpg")}
              alt=""
              height="150px"
            />
            <img
              src={require("../Images/Group-Images/everyone.jpg")}
              alt=""
              height="150px"
            /> */}
          </div>
          <br />
        </>
      )}
      {tagsActive && <ActiveTags />}
      {tagsActive && <SearchList />}
    </div>
  );
}

export default SearchContent;
