// Task 1
function add(a, b, callback) {
  if (callback === console.log) {
    console.log(a + b);
  } else if (callback === alert) {
    alert(a + b);
  }
}

add(5, 6, console.log);

// Task 2
function gender(cins) {
  if (cins === "K") {
    return function (name) {
      console.log(`Cənab ${name}`);
    };
  } else if (cins === "Q")
    return function (name) {
      console.log(`Xanım ${name}`);
    };
}
const forMan = gender("K");
forMan("Kərəm");
const forWoman = gender("Q");
forWoman("Əsli");
