// 4 ədəd button olsun. Hansına clickləsəm bodynin rəngi o rəngdə olsun.
// A: done ✅
let body = document.querySelector("body");
let roundGrey = document.querySelector(`.grey`);
let roundRed = document.querySelector(`.red`);
let roundBlue = document.querySelector(`.blue`);
let roundYellow = document.querySelector(`.yellow`);

roundGrey.onclick = () => {
  body.style.backgroundColor = "grey";
};
roundRed.onclick = () => {
  body.style.backgroundColor = "red";
};
roundBlue.onclick = () => {
  body.style.backgroundColor = "blue";
};
roundYellow.onclick = () => {
  body.style.backgroundColor = "yellow";
};
