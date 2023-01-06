const root = document.getElementById("root");
const url = "https://www.themealdb.com/api/json/v1/1/random.php";

axios.get(url).then(({ data }) => {
  const mealName = document.createElement("h1");
  const mealArea = document.createElement("h3");
  const mealPhoto = document.createElement("img");
  const mealInstructor = document.createElement("h5");
  const mealCategory = document.createElement("h3");
  const ingridiendts = document.createElement("div");
  const ingNames = document.createElement("div");
  const ingmeasures = document.createElement("div");
  const heading = document.createElement("h5");
  ingridiendts.append(ingNames, ingmeasures);
  ingridiendts.className = "ingridiendts";
  ingNames.className = "ingNames";
  ingmeasures.className = "ingmeasures";
  heading.textContent = "Meal ingridiendts and measures";
  heading.className = "heading";
  mealPhoto.className = "photo";

  const allMeals = data.meals[0];
  mealName.textContent = `Name: ${allMeals.strMeal}`;
  mealArea.textContent = `Region: ${allMeals.strArea}`;
  mealInstructor.textContent = `How to meal: ${allMeals.strInstructions}`;
  mealPhoto.src = allMeals.strMealThumb;
  mealCategory.textContent = `Meal Category: ${allMeals.strCategory}`;

  for (i = 1; i <= 20; i++) {
    const ingrident = document.createElement("h6");
    ingNames.append(ingrident);
    var alling = "strIngredient" + [i];
    ingrident.textContent = allMeals[alling];
    console.log(alling);
  }

  for (i = 1; i <= 20; i++) {
    const measure = document.createElement("h6");
    ingmeasures.append(measure);
    var allmeasure = "strMeasure" + [i];
    measure.textContent = allMeals[allmeasure];
  }

  root.append(
    mealName,
    mealArea,
    mealCategory,
    mealInstructor,
    mealPhoto,
    heading,
    ingridiendts
  );

  console.log(data.meals[0]);
});

// data.forEach((meals) => {
//     const h3 = document.createElement("h3");
//     const h5 = document.createElement("h3");
//     root.append(h3, h5);
//   });
