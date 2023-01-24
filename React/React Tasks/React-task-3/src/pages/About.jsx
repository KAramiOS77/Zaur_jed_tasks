import { PageContainer } from "component/PageContainer";
import hacker from "../imgaes/hacker2.webp";
import styles from "../component/PageContainer/index.module.css";

export const About = ({}) => {
  return (
    <>
      <PageContainer>
        <div className={styles.AboutMain}>
          <img src={hacker} alt="dahi senetkar" />
          <p>
            Bu sayt saxta saytdir sizin pullarinizi ogurlamag ucun udzeldilib.
          </p>
        </div>
      </PageContainer>
    </>
  );
};
