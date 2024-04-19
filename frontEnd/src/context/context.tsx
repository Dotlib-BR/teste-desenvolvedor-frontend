//React
import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";

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
    showFooter: true
  });

  const memoizedState = useMemo(() => state, [state]);

  return (
    <IGlobalStateContext.Provider value={{ state: memoizedState, setState }}>
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
