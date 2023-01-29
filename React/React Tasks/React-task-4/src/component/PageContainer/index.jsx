import { NavLink } from "react-router-dom";
import { FooterComp } from "./Footer";
import styles from "./index.module.css";
import { Navbar } from "./Navbar";

export const PageContainer = ({ children, className, style }) => {
  return (
    <div>
      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={className} style={style}>
        {children}
      </main>
      <footer>
        <FooterComp />
      </footer>
    </div>
  );
};
