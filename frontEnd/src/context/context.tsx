//React
import React, { createContext, useContext, useState, ReactNode } from "react";

//Types
import { IGlobalState, IGlobalStateContextType } from "./types";

const IGlobalStateContext = createContext<IGlobalStateContextType | undefined>(
  undefined
);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<IGlobalState>({
    page: 1,
    listData: [],
  });

  return (
    <IGlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </IGlobalStateContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(IGlobalStateContext);
  if (!context) {
    throw new Error(
      "useIGlobalState deve ser usado dentro de um GlobalStateProvider"
    );
  }
  return context;
};
