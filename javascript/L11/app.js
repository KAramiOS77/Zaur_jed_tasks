// A: done ✅
let inputElem = document.getElementById("input");
let buttonElem = document.getElementById("btn");
let elemDiameter = document.getElementById("diameter");
let elemArea = document.getElementById("area");
let roundElem = document.getElementById("round");

buttonElem.onclick = () => {
  if (inputElem.value >= 10 && inputElem.value <= 100) {
    roundElem.style.width = inputElem.value + "px";
    roundElem.style.height = inputElem.value + "px";
    roundElem.style.borderWidth = "2px";

    elemDiameter.innerHTML = `Çevrənin uzunluğu: ${parseInt(
      inputElem.value * Math.PI
    )}`;

    elemArea.innerHTML = `Çevrənin sahəsi:${parseInt(
      (inputElem.value * inputElem.value * Math.PI) / 4
    )} `;
  } else if (inputElem.value < 10) {
    alert("Please input bigger than 10");
  } else if (inputElem.value > 100) {
    alert("Please input less than 100");
  }
};
