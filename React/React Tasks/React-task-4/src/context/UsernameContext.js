import { createContext } from "react";

const data = { username: "Karam", email: "kereme777@gmail.com" };

export const UsernameContext = createContext();
export function UsernameContextComponent({ children }) {
  return (
    <UsernameContext.Provider value={data}>{children}</UsernameContext.Provider>
  );
}
