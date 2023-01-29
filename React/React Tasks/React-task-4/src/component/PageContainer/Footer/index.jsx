import { UsernameContext } from "context/UsernameContext";
import { useContext } from "react";
import styles from "./index.module.css";

export function FooterComp() {
  const showName = useContext(UsernameContext);
  console.log(showName);
  return (
    <p className={styles.footer}>
      Username: {showName.username} <br />
      Email: {showName.email}
    </p>
  );
}
