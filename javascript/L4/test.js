function calculator() {
  let a = +prompt("Eded 1-i daxil edin:");
  let b = +prompt("Eded 2-ni daxil edin:");
  let c = prompt("Operatoru daxil edin:");
  

  if (c === "+") {
    result = a + b;
  } else if (c === "-") {
    result = a - b;
  } else if (c === "*") {
    result = a * b;
  } else if (c === "/") {
    result = a - b;
  } else if (c === "**") {
    result = a ** b;
  } else if (c === "^") {
    let b = 0;
    result = Math.sqrt(a);
  }
  return result
}




// function showResult(input, calc, show) {}

// function promt() {
//   let a = +prompt("Type first number:");
//   let b = +prompt("Type second number:");
//   let c = prompt("Type an operator:");
//   let input = [a, b, c];
//   return input;
// }
// function calculate(a, b, c) {
//   if (c === "+") {
//     result = a + b;
//   } else if (c === "*") {
//     result = a * b;
//   } else if (c === "-") {
//     result = a - b;
//   } else if (c === "/") {
//     result = a / b;
//   } else if (c === "**") {
//     result = Math.pow(a);
//   } else if (c === "^") {
//     result = Math.sqrt(a);
//   }
//   return result;
// }
// function declare() {}

// showResult(
//   prompt,
//   calculate(
//     +prompt("Type first number:"),
//     +prompt("Type second number:"),
//     prompt("Type an operator:")
//   ),
//   declare
// );
