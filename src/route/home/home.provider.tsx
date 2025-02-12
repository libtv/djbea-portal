import React, { createContext } from "react";

const HomeContext = createContext(null as any);

export const HomeProvider = ({ children }: any) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};
