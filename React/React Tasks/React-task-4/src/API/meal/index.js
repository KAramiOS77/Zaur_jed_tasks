import axios from "axios";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

export async function fetchMeal(setMeal) {
  const { data } = await axios.get(url);
  console.log(data);
  setMeal(data.meals[0]);
}
