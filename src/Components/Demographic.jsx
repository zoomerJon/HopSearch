import { useContext, useEffect, useState } from "react";
import ActiveTagContext from "../Context/ActiveTagContext";

export default function Demographic({ options, filter, toggleOverlay }) {
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
  useEffect(() => {
    // test = "<div>test</div>;";
  }, []);

  const handleClick = (e, filter) => {
    console.log(options);
    // console.log(tags.map((obj) => Object.values(obj)).flat(2));
    const tag = e.target.innerText;
    const localActiveTags = tags.find((obj) => obj[filter])[filter];
    if (activeTagsArr.includes(tag)) {
      console.log(tags.find((obj) => obj[filter])[filter]);
      if (localActiveTags.length === 1) {
        // // Set activeTags to false
        // setTagsActive(false);
        document
          .getElementsByClassName(`Demographic-clear`)[0]
          .classList.add("hide");
        setShow(false);
      }
      removeTag(filter, tag);
    } else {
      if (localActiveTags.length === 0) {
        // // Set activeTags to true
        // setTagsActive(true);
        document
          .getElementsByClassName(`Demographic-clear`)[0]
          .classList.remove("hide");
      }
      setShow(true);
      setTag(filter, tag);
    }
    e.target.classList.toggle("active");
  };

  const clearAllLocalTags = () => {
    clearLocalTags("Married");
    clearLocalTags("Singles");
    clearLocalTags("Youth");
  };
  // const clearLocalTags = (filter) => {
  //   const localActiveTags = tags.find((obj) => obj[filter])[filter];
  //   console.log(localActiveTags);
  // };
  return (
    <div className={`filter-options-container ${filter}-options hide`}>
      <div className="filter-options-container-mobile">
        <div className="filter-heading-mobile">
          <h2>{filter}</h2>
          <p
            onClick={() => {
              toggleOverlay(filter.replace(/\s+/g, ""));
            }}
          >
            Done
          </p>
        </div>
        {
          <div
            className={`clear-local-tags ${filter}-clear hide`}
            onClick={() => clearAllLocalTags()}
          >
            Clear Tags
          </div>
        }
        <div className={`filter-options `}>
          <div
            className={`filter-option Everyone-Welcome`}
            key={"key"}
            onClick={(e) => handleClick(e, "Demographic")}
          >
            Everyone Welcome
          </div>
          {Object.keys(options).map((subfilter, i) => {
            return (
              <div key={i} className="demographics-suboption">
                <h5>{subfilter}</h5>
                {options[subfilter].map((option, i) => (
                  <div
                    className={`filter-option ${option.replace(/\s+/g, "")}`}
                    key={i}
                    onClick={(e) => handleClick(e, filter)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            );
          })}
          {/* <div
            className={`filter-option`}
            onClick={(e) => handleClick(e, filter)}
          >
            demographic things
          </div> */}
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
