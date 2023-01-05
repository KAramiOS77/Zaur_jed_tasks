// 1 Accessing object properties one
function myFunction1(obj) {
  return obj.country;
}
console.log(myFunction1({ continent: "Asia", country: "Japan" }));

// 2 Accessing object properties two
function myFunction2(obj) {
  return obj["prop-2"];
}
console.log(myFunction2({ one: 1, "prop-2": 2 }));

// 3 Accessing object properties three
function myFunction3(obj, key) {
  return obj[key];
}
console.log(myFunction3({ continent: "Asia", country: "Japan" }, "continent"));

// 4 Check if property exists in object
function myFunction4(a, b) {
  return b in a;
}
console.log(myFunction4({ a: 1, b: 2, c: 3 }, "b"));

// 5 Check if property exists in object and is truthy
function myFunction5(a, b) {
  if (a[b] === undefined || a[b] === null || a[b] === false) {
    return false;
  } else {
    return true;
  }
  //   return Boolean(a[b]);
}
console.log(myFunction5({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunction5({ x: "a", y: null, z: "c" }, "y"));
console.log(myFunction5({ x: "a", b: "b", z: undefined }, "z"));

// 6 Creating Javascript objects one
function myFunction6(a) {
  let obj = { key: a };
  return obj;
}
console.log(myFunction6("a"));

// 7 Creating Javascript objects two
function myFunction7(a, b) {
  return { [a]: b };
}
console.log(myFunction7("a", "b"));

// 8 Creating Javascript objects three
function myFunction8(a, b) {
  let obj = {};
  for (let x in a) {
    obj[a[x]] = b[x];
  }
  return obj;
}
console.log(myFunction8(["a", "b", "c"], [1, 2, 3]));
// a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {})

// 9 Extract keys from Javascript object
function myFunction9(a) {
  return Object.keys(a);
}
console.log(myFunction9({ a: 1, b: 2, c: 3 }));

// 10 Return nested object property
function myFunction10(obj) {
  if (obj.a && obj.a.b) {
    return obj.a.b;
  } else {
    return undefined;
  }
}
console.log(myFunction10({ a: 1 }));
console.log(myFunction10({ a: { b: { c: 3 } } }));
console.log(myFunction10({ b: { a: 1 } }));
console.log(myFunction10({ a: { b: 2 } }));
// obj?.a?.b;

// 11 Sum object values
function myFunction11(a) {
  let sum = 0;
  let numbers = Object.values(a);
  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(myFunction11({ j: 9, i: 2, x: 3, z: 4 }));
// Object.values(a).reduce((sum, cur) => sum + cur, 0);

// 12 Remove a property from an object
function myFunction12(obj) {
  delete obj.b;
  return obj;
}
console.log(myFunction12({ a: 1, b: 7, c: 3 }));
// const { b, ...rest } = obj;
// return rest;

// 13 Merge two objects with matching keys
function myFunction13(x, y) {
  y.d = y.b;
  delete y.b;
  let obj = Object.assign({}, x, y);
  return obj;
}
console.log(myFunction13({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
// const { b, ...rest } = y;
//   return { ...x, ...rest, d: b };

// 14 Multiply all object values by x
function myFunction14(a, b) {
  let keys = Object.keys(a);
  let values = Object.values(a);
  let newValue = values.map((elem) => elem * b);
  let obj = {};
  for (let x in keys) {
    obj[keys[x]] = newValue[x];
  }
  return obj;
}
console.log(myFunction14({ a: 1, b: 2, c: 3 }, 3));
// return Object.entries(a).reduce((acc, [key, val]) => {
//   return { ...acc, [key]: val * b };
// }, {});

// 💀⚡ 10
