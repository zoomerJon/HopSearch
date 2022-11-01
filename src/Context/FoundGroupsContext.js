import { createContext, useEffect, useReducer, useState } from "react";

const FoundGroupsContext = createContext();

export const FoundGroupsProvider = ({ children }) => {
  return <FoundGroupsContext.Provider>{children}</FoundGroupsContext.Provider>;
};

export default FoundGroupsContext;
