import { useContext, useState } from "react";
import ActiveTagContext from "../Context/ActiveTagContext";
import FilterOptions from "./FilterOptions";

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

    // // Check for active tags, call addActiveClass
    // if (tags.find((obj) => obj[filter])[filter].length > 0) {
    //   console.log("go!");
    //   console.log(tags.find((obj) => obj[filter])[filter]);
    //   setTimeout(() => {
    //     addActiveClass(tags.find((obj) => obj[filter])[filter]);
    //   }, 200);
    // }
  };
  return (
    <div className="filter-container">
      <h1
        onClick={() => {
          toggle(filter.replace(/\s+/g, ""));
        }}
      >
        {filter}
      </h1>
      <FilterOptions filter={filter.replace(/\s+/g, "")} options={options} />

      {/* Conditionally Render Show */}
      {/* {show && (
        <FilterOptions filter={filter.replace(/\s+/g, "")} options={options} />
      )} */}
    </div>
  );
};

export default Filter;
