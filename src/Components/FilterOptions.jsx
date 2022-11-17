import { useContext, useState } from "react";
import ActiveTagContext from "../Context/ActiveTagContext";
import Demographic from "./Demographic";

function FilterOptions({ options, filter, toggleOverlay }) {
  const {
    activeTagsArr,
    clearLocalTags,
    removeTag,
    setTag,
    setTagsActive,
    tags,
    tagsActive,
  } = useContext(ActiveTagContext);
  const [show, setShow] = useState(false);

  const handleClick = (e, filter) => {
    // console.log(tags.map((obj) => Object.values(obj)).flat(2));
    const tag = e.target.innerText;
    const localActiveTags = tags.find((obj) => obj[filter])[filter];
    if (activeTagsArr.includes(tag)) {
      console.log(tags.find((obj) => obj[filter])[filter]);
      if (localActiveTags.length === 1) {
        // // Set activeTags to false
        // setTagsActive(false);
        document
          .getElementsByClassName(`${filter}-clear`)[0]
          .classList.add("hide");
        setShow(false);
      }
      removeTag(filter, tag);
    } else {
      if (localActiveTags.length === 0) {
        // // Set activeTags to true
        // setTagsActive(true);
        document
          .getElementsByClassName(`${filter}-clear`)[0]
          .classList.remove("hide");
      }
      setShow(true);
      setTag(filter, tag);
    }
    e.target.classList.toggle("active");
  };
  // const clearLocalTags = (filter) => {
  //   const localActiveTags = tags.find((obj) => obj[filter])[filter];
  //   console.log(localActiveTags);
  // };
  return (
    <div className={`filter-options-container ${filter}-options hide`}>
      <div className="filter-options-container-mobile">
        <div className="filter-heading-mobile">
          <h2>{filter === "InPerson" ? "In Person" : filter}</h2>
          <p
            onClick={() => {
              toggleOverlay(filter.replace(/\s+/g, ""));
            }}
          >
            Terminado
          </p>
        </div>
        {
          <div
            className={`clear-local-tags ${filter}-clear hide`}
            onClick={() => clearLocalTags(filter)}
          >
            Clear Tags
          </div>
        }
        <div className={`filter-options `}>
          {filter === "Demográfico" && (
            <div
              className={`filter-option TodosBienvenidos`}
              key={"key"}
              onClick={(e) => handleClick(e, "Demográfico")}
            >
              Todos Bienvenidos
            </div>
          )}
          {filter === "Demográfico"
            ? Object.keys(options).map((subfilter, i) => {
                return (
                  <div key={i} className="demographics-suboption">
                    <h5>{subfilter}</h5>
                    {options[subfilter].map((option, i) => (
                      <div
                        className={`filter-option ${option.replace(
                          /\s+/g,
                          ""
                        )}`}
                        key={i}
                        onClick={(e) => handleClick(e, filter)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                );
              })
            : options.map((option, i) => (
                <div
                  className={`filter-option ${option.replace(/\s+/g, "")}`}
                  key={i}
                  onClick={(e) => handleClick(e, filter)}
                >
                  {option}
                </div>
              ))}
          {/* {options.map((option, i) => (
            <div
              className={`filter-option ${option.replace(/\s+/g, "")}`}
              key={i}
              onClick={(e) => handleClick(e, filter)}
            >
              {option}
            </div>
          ))} */}
          {/* {options.map((option, i) => (
            <div
              className={`filter-option ${option.replace(/\s+/g, "")}`}
              key={i}
              onClick={(e) => handleClick(e, filter)}
            >
              {option}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default FilterOptions;
