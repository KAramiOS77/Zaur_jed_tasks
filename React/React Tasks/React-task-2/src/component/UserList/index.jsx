import { users } from "../../data/user";
import styles from "./index.module.css";

export const UserList = () => {
  return (
    <>
      <div className={styles.pageContainer}>
        {users.map(({ id, username, img, job }) => {
          return (
            <div className={styles.card} key={id}>
              <img src={img} alt={username} />
              <h1>{username}</h1>
              <p>{job}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
