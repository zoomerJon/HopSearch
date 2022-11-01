import { useContext, useState } from "react";

import ActiveTagContext from "../../Context/ActiveTagContext";

function ActiveTags() {
  const { activeTagsArr, clearAllTags, removeTag, setTagsActive, tags } =
    useContext(ActiveTagContext);
  // const activeTagsArr = Object.keys(tags).flatMap((tag) => tag);

  const handleClick = (tag, filter) => {
    const localActiveTags = tags.find((obj) => obj[filter])[filter];
    if (localActiveTags.length === 1) {
      document
        .getElementsByClassName(`${filter}-clear`)[0]
        .classList.add("hide");
    }
    if (activeTagsArr.length === 1) {
      // Set activeTags to false
      setTagsActive(false);
    }
    document
      .getElementsByClassName(`${tag.replace(/\s+/g, "")}`)[0]
      .classList.toggle("active");

    removeTag(filter, tag);
  };
  return (
    <div className="active-tag-container">
      {tags.map((tag) => {
        return Object.values(tag)[0].length > 0
          ? Object.values(tag)[0].map((el, i) => (
              <div className="active-tag" key={i}>
                {el}
                <svg
                  // className={tag}
                  onClick={() => handleClick(el, Object.keys(tag)[0])}
                  fill="#00cf22"
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
                </svg>
              </div>
            ))
          : null;
      })}
      <div className="active-tag clear-tags" onClick={clearAllTags}>
        Clear Active Tags
      </div>
    </div>
  );
}

export default ActiveTags;
