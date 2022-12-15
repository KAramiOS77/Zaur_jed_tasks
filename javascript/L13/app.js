const rootElem = document.getElementById("root");
const myMessage = document.createElement("h2");
rootElem.appendChild(myMessage);

let message = "";
window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    message = message.slice(0, message.length - 1);
  } else {
    message += e.key;
  }
  if (message === "simsimacil") {
    myMessage.textContent = "xos geldin menim agam";
  }
});
