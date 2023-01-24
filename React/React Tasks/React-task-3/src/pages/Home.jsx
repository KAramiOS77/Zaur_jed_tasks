import { PageContainer } from "component/PageContainer";
import hacker from "../imgaes/hacker.jpeg";
import styles from "../component/PageContainer/index.module.css";

export const Home = ({}) => {
  return (
    <>
      <PageContainer>
        <div className={styles.HomeMain}>
          <p>
            This page's aim is steal your information. Please write your
            information in Contact section.
          </p>
          <img src={hacker} alt="dahi senetkar" />
        </div>
      </PageContainer>
    </>
  );
};
