const root = document.getElementById("root");
const url = "https://www.swapi.tech/api/people/";

for (i = 1; i <= 10; i++) {
  async function getData(url) {
    const resp = await axios.get(url + [i]);

    const info = resp.data.result;
    const description = document.createElement("h1");
    const properities = document.createElement("div");
    const birthYear = document.createElement("h3");
    const eyeColor = document.createElement("h3");
    const gender = document.createElement("h3");
    const hairColor = document.createElement("h3");
    const height = document.createElement("h3");
    const name = document.createElement("h3");
    description.textContent = info.description;
    birthYear.textContent = `Birth Year: ${info.properties.birth_year}`;
    eyeColor.textContent = `Eye color: ${info.properties.eye_color}`;
    gender.textContent = `Gender: ${info.properties.gender}`;
    hairColor.textContent = `Hair Color: ${info.properties.hair_color}`;
    height.textContent = `Height: ${info.properties.height}`;
    name.textContent = `Name: ${info.properties.name}`;

    root.append(description, properities);
    properities.append(name, birthYear, eyeColor, gender, hairColor, height);
  }
  getData(url);
}

