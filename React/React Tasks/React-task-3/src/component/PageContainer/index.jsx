import styles from "./index.module.css";
import { Navbar } from "./Navbar";

export const PageContainer = ({ children }) => {
  return (
    <div>
      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        © 2023 Heç bir hüquq qorunmur, kef elə
      </footer>
    </div>
  );
};
