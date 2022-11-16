import { useContext, useState } from "react";
import ActiveTagContext from "../Context/ActiveTagContext";
import Demographic from "./Demographic";
import FilterOptions from "./FilterOptions";
import { ReactComponent as DropDownArrow } from "../assets/down-arrow-svgrepo-com.svg";

const Filter = ({ filter, options }) => {
  const { addActiveClass, foundGroups, tags } = useContext(ActiveTagContext);
  const [show, setShow] = useState(false);

  const toggle = (filter) => {
    // // Toggle show
    // setShow(!show);

    // Find Filter-Options Container, Toggle "hide"
    document
      .getElementsByClassName(`${filter}-options`)[0]
      .classList.toggle("hide");

    document.getElementsByClassName(`filters`)[0].classList.toggle("overflow");
    const localActiveTags = tags.find((obj) => obj[filter])[filter];
    if (localActiveTags.length > 0) {
      document
        .getElementsByClassName(`${filter}-clear`)[0]
        .classList.remove("hide");
    }
    // // Check for active tags, call addActiveClass
    // if (tags.find((obj) => obj[filter])[filter].length > 0) {
    //   console.log("go!");
    //   console.log(tags.find((obj) => obj[filter])[filter]);
    //   setTimeout(() => {
    //     addActiveClass(tags.find((obj) => obj[filter])[filter]);
    //   }, 200);
    // }
    console.log(document.getElementsByClassName(`${filter}-overlay`)[0]);
    document
      .getElementsByClassName(`${filter}-overlay`)[0]
      .classList.toggle("hide");
  };
  const toggleOverlay = (filter) => {
    // document.getElementsByClassName("modal")[0].classList.toggle("hide");
    document
      .getElementsByClassName(`${filter}-overlay`)[0]
      .classList.toggle("hide");

    // Find Filter-Options Container, Toggle "hide"
    document
      .getElementsByClassName(`${filter}-options`)[0]
      .classList.toggle("hide");
    const localActiveTags = tags.find((obj) => obj[filter])[filter];
    if (localActiveTags.length > 0) {
      document
        .getElementsByClassName(`${filter}-clear`)[0]
        .classList.toggle("hide");
    }

    document.getElementsByClassName(`filters`)[0].classList.toggle("overflow");
  };
  return (
    <>
      <div
        className={`${filter.replace(/\s+/g, "")}-overlay overlay-mobile hide`}
        onClick={() => {
          toggleOverlay(filter.replace(/\s+/g, ""));
        }}
      ></div>
      <div className={`filter-container ${filter}-container`}>
        <div
          className={`filter-heading`}
          onClick={() => {
            toggle(filter.replace(/\s+/g, ""));
          }}
        >
          {filter}
          <DropDownArrow height={"1em"} />
        </div>

        <FilterOptions
          filter={filter.replace(/\s+/g, "")}
          options={options}
          toggleOverlay={toggleOverlay}
        />

        {/* // Demographic Component */}
        {/* {filter === "Demographic" ? (
          <Demographic
            filter={filter.replace(/\s+/g, "")}
            options={options}
            toggleOverlay={toggleOverlay}
          />
        ) : (
          <FilterOptions
            filter={filter.replace(/\s+/g, "")}
            options={options}
            toggleOverlay={toggleOverlay}
          />
        )} */}
      </div>
    </>
  );
};

export default Filter;
