import * as React from "react";
import { createContext, useContext } from "react";

const DataContext = createContext(undefined);

interface IContextProviderProps {
  data: any;
  children: React.ReactChild;
}

const DataProvider = ({ data, children }: IContextProviderProps) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);

export default DataProvider;
