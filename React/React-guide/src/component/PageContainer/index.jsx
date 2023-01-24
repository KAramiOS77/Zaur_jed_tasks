import { NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { Navbar } from "./Navbar";

export const PageContainer = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <Navbar />
      </header>

      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
