function getNumber() {
  return +prompt("Type number:");
}
function showResult(a, b, c) {
  console.log(
    `${a} ve ${b} ededleri uzre muvafiq hesablama neticesi ${c} edir`
  );
}
function sum(a, b) {
  return a + b;
}
function deduction(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multip(a, b) {
  return a * b;
}
function sqrt(a) {
  return Math.sqrt(a);
}
function pow(a, b) {
  return a ** b;
}

let num1 = +getNumber();
let num2 = +getNumber();

let cem = sum(num1, num2);
let ferq = deduction(num1, num2);
let bolme = divide(num1, num2);
let vurma = multip(num1, num2);
let kokalti = sqrt(num1);
let quvvet = pow(num1, num2);

showResult(num1, num2, cem);
showResult(num1, num2, ferq);
showResult(num1, num2, bolme);
showResult(num1, num2, vurma);
showResult(num1, num2, kokalti);
showResult(num1, num2, quvvet);
