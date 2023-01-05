// 1 sum two num
function myFunction1(a, b) {
  return a + b;
}
console.log(myFunction1(1, 2));

// 2 comparison
function myFunction2(a, b) {
  return a === b;
}
console.log(myFunction2(1, 2));

// 3 typeof value
function myFunction3(a) {
  return typeof a;
}
console.log(myFunction3(1));

// 4 ntn char of str
function myFunction4(a, n) {
  return a[n - 1];
}
console.log(myFunction4("abcd", 1));

// 5 remove first n char from str
function myFunction5(a) {
  return a.slice(3, a.length);
}
console.log(myFunction5("abcdefg"));

// 6 last n char of str
function myFunction6(a) {
  return a.slice(a.length - 3);
}
console.log(myFunction6("abcdefg"));

// 7 first n char of str
function myFunction7(a) {
  return a.slice(0, 3);
}
console.log(myFunction7("abcdefg"));

//8 position of one string in another
function myFunction8(a) {
  return a.indexOf("is");
}
console.log(myFunction8("risky"));

// 9 first half of string
function myFunction9(a) {
  return a.slice(0, a.length / 2);
}
console.log(myFunction9("abcdefgh"));

// 10 Remove last n char of string
function myFunction10(a) {
  return a.slice(0, a.length - 3);
}
console.log(myFunction10("1234"));

//11 percentage of a number
function myFunction11(a, b) {
  return (a * b) / 100;
}
console.log(myFunction11(100, 50));

// 12 basic math
function myFunction12(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}
console.log(myFunction12(6, 5, 4, 3, 2, 1));

// 13 if contain concat
function myFunction13(a, b) {
  if (a.includes(b)) {
    return b.concat(a);
  } else {
    return a.concat(b);
  }
}
console.log(myFunction13("Java", "script"));

// 14 is even?
function myFunction14(a) {
  return a % 2 === 0;
}
console.log(myFunction14(10));

// 15 char counter
function myFunction15(a, b) {
  let say = 0;
  let allChar = b.split("");
  for (i = 0; i < allChar.length; i++) {
    if (a === allChar[i]) {
      say++;
    }
  }
  return say;
}
console.log(
  myFunction15("m", "how many times does the character occur in this sentence?")
);

// 16 whole num
function myFunction16(a) {
  return a - parseInt(a) === 0;
}
console.log(myFunction16(10));

// 17 multip div
function myFunction17(a, b) {
  if (a < b) {
    return a / b;
  } else {
    return a * b;
  }
}
console.log(myFunction17(10, 100));

// 18 round 2 decimal
function myFunction18(a) {
  return Math.round(a * 100) / 100;
}

console.log(myFunction18(26.1379));

// 19 split into digits
function myFunction19(a) {
  let str = a.toString();
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.push(parseInt(arr[i]));
  }

  return newArr;
}

console.log(myFunction19(193278));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

