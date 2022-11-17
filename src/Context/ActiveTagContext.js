import { createContext, useEffect, useReducer, useState } from "react";
import ActiveTagReducer from "./ActiveTagReducer";
import groupData from "../Data/groupData";

const ActiveTagContext = createContext();

export const ActiveTagProvider = ({ children }) => {
  const initialState = [
    { Ubicación: [] },
    { Demográfico: [] },
    { Género: [] },
    { Idioma: [] },
    { Dias: [] },
    { EnPersona: [] },
    { NiñosBienvenidos: [] },
  ];
  const [activeTagsArr, setActiveTagsArr] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [foundGroups, setFoundGroups] = useState([]);
  const [tagsActive, setTagsActive] = useState(false);

  const [state, dispatch] = useReducer(ActiveTagReducer, initialState);

  useEffect(() => {
    setActiveTagsArr(state.map((obj) => Object.values(obj)).flat(2));
    console.log(state);

    findGroups(state);
  }, state);

  useEffect(() => {
    const fetchGroups = async () => {
      await fetch("/posts")
        .then((response) => response.json())
        .then((data) => setGroupList(data));
    };
    fetchGroups();
  }, []);

  // Fetch Data
  const fetchData = () => {
    setGroupList(groupData);
  };

  // Set Tag
  const setTag = (filter, tag) => {
    if (activeTagsArr.length === 0) {
      // Set activeTags to true
      setTagsActive(true);
    }
    dispatch({
      type: "SET_TAG",
      payload: { filter, tag },
    });
    // findGroupsTag([...state, tag]);
  };

  // Remove Tag
  const removeTag = (filter, tag) => {
    if (activeTagsArr.length === 1) {
      // Set activeTags to false
      setTagsActive(false);
    }
    dispatch({
      type: "REMOVE_TAG",
      payload: { filter, tag },
    });
  };

  // Search for groups with tags
  const findGroups = (tags) => {
    const allGroups = groupList;
    const groups = tags.reduce((prevGroups, currGroups) => {
      // Check if there are any active tags for filter, if not return all groups
      if (Object.values(currGroups)[0].length === 0) {
        return prevGroups;
      } else {
        // Map through active tags
        const foundGroups = Object.values(currGroups)[0].map((tag) => {
          const filter = Object.keys(currGroups)[0];
          // Return group from grouplist if the current filter inlcudes the current active tag
          return prevGroups.filter((group) => group[`${filter}`].includes(tag));
        });

        return foundGroups.flat();
      }
    }, allGroups);
    console.log(groups);
    setFoundGroups(groups);
  };
  const addActiveClass = (options) => {
    options.forEach((option) => {
      document.getElementsByClassName(`${option}`)[0].classList.add("active");
    });
  };
  const removeAllActiveClass = () => {
    // Remove active class from all tag divs
    activeTagsArr.forEach((tag) => {
      document
        .getElementsByClassName(`${tag.replace(/\s+/g, "")}`)[0]
        .classList.remove("active");
    });

    // Hide clear-local-tags divs
    const clearTagsArr = document.querySelectorAll(`.clear-local-tags`);
    for (const clearTag of clearTagsArr) {
      clearTag.classList.add("hide");
    }
  };
  const clearAllTags = () => {
    removeAllActiveClass();
    setTagsActive(false);
    dispatch({
      type: "CLEAR_ALL_TAGS",
      payload: { initialState },
    });
  };
  const clearLocalTags = (filter) => {
    const localActiveTags = state.find((obj) => obj[filter])[filter];
    console.log(localActiveTags);
    localActiveTags.forEach((tag) => {
      console.log(
        document.getElementsByClassName(`${tag.replace(/\s+/g, "")}`)[0]
      );
      document
        .getElementsByClassName(`${tag.replace(/\s+/g, "")}`)[0]
        .classList.remove("active");
    });
    if (localActiveTags.length === activeTagsArr.length) {
      setTagsActive(false);
    }
    if (filter === "Singles" || filter == "Married" || filter === "Youth") {
      document
        .getElementsByClassName(`Demographic-clear`)[0]
        .classList.add("hide");
    } else {
      document
        .getElementsByClassName(`${filter}-clear`)[0]
        .classList.add("hide");
    }
    dispatch({
      type: "CLEAR_LOCAL_TAGS",
      payload: { filter },
    });
  };
  return (
    <ActiveTagContext.Provider
      value={{
        activeTagsArr,
        addActiveClass,
        clearAllTags,
        clearLocalTags,
        findGroups,
        foundGroups,
        groupList,
        removeTag,
        setTag,
        setTagsActive,
        tags: state,
        tagsActive,
      }}
    >
      {children}
    </ActiveTagContext.Provider>
  );
};

export default ActiveTagContext;
