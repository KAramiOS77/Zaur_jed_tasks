import { createContext } from "react";

export const DataContext = createContext();

const data = {
  age: 21,
  name: "Razi",
};

export function DataContextComp({ children }) {
  return (
    <>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </>
  );
}
