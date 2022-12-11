const users = [
  {
    id: 1,
    username: "Ali",
    img: "ali",
    job: "developer",
  },
  {
    id: 2,
    username: "bedbext_developer",
    img: "bedbext_developer",
    job: "test2",
  },
  {
    id: 3,
    username: "duman",
    img: "duman",
    job: "test3",
  },
  {
    id: 4,
    username: "js_oyrenen_shexs",
    img: "js_oyrenen_shexs",
    job: "test4",
  },
  {
    id: 5,
    username: "qarli_daglar",
    img: "qarli_daglar",
    job: "test5",
  },
  {
    id: 6,
    username: "qoca_cinar",
    img: "qoca_cinar",
    job: "test6",
  },
  {
    id: 7,
    username: "visselka",
    img: "visselka",
    job: "test7",
  },
  {
    id: 8,
    username: "novxani",
    img: "novxani",
    job: "test8",
  },
];
const root = document.getElementById("root");

function createElem() {
  for (let i = 0; i < 8; i++) {
    const newEl = document.createElement("div");
    root.append(newEl);
    newEl.className = "newelement" + " " + "box" + i;

    const photo = document.createElement("img");
    photo.setAttribute("src", `./img/${users[i].img}.jpg`);
    newEl.appendChild(photo);
    photo.className = "photo" + " " + "image" + i;

    const user = document.createElement("h1");
    user.textContent = users[i].username;
    newEl.appendChild(user);
    user.className = "name" + " " + "heading" + i;

    const job = document.createElement("h3");
    job.textContent = users[i].job;
    newEl.appendChild(job);
    job.className = "job" + " " + "smallheading" + i;
  }
}
createElem();
