import { useEffect, useState } from "react";
import { fetchMeal } from "API/meal";
import styles from "./index.module.css";
import { PageContainer } from "component/PageContainer";

export const Yummy = ({}) => {
  const [meal, setMeal] = useState({});

  useEffect(() => {
    fetchMeal(setMeal);
  }, []);
  return (
    <>
      {" "}
      <PageContainer>
        <h1 className={styles.heading}>Welcome to Hell</h1>
        {Object.keys(meal).length > 0 && (
          <>
            <p>Meal Name: {meal.strMeal}</p>
            <p>Origing country: {meal.strArea}</p>
            <p>Meal category: {meal.strCategory}</p>
            <a target="_blank" href={`${meal.strYoutube}`}>
              go on Youtube please subscribe me
            </a>
            <img
              className={styles.img}
              src={`${meal.strMealThumb}`}
              alt={`${meal.strMeal}`}
            />
          </>
        )}
      </PageContainer>
    </>
  );
};
