// 1 nth elem of array
function myFunction1(a, n) {
  return a[n - 1];
}
console.log(myFunction1([1, 2, 3, 4, 5], 3));

// 2 Remove first n elements of an array
function myFunction2(a) {
  return a.slice(3);
}
console.log(myFunction2([1, 2, 3, 4]));

// 3 last n elements of an array
function myFunction3(a) {
  return a.slice(a.length - 3);
}
console.log(myFunction3([1, 2, 3, 4]));

// 4 first n elements of an array
function myFunction4(a) {
  return a.slice(0, 3);
}
console.log(myFunction4([1, 2, 3, 4]));

// 5  last n array elements
function myFunction5(a, n) {
  return a.slice(a.length - n);
}
console.log(myFunction5([1, 2, 3, 4, 5], 2));

// 6 Remove a specific array element
function myFunction6(a, b) {
  for (let i = 0; i <= a.length; i++) {
    if (a[i] === b) {
      a.splice(i, 1);
    }
  }
  return a;
}
console.log(myFunction6([1, 2, 3, 4, 5], 2));
// saytda filter cur zad yazib o nedi?

// 7 Count number of elements in JavaScript array
function myFunction7(a) {
  return a.length;
}
console.log(myFunction7([1, 2, 3, 4, 5]));

// 8 Count number of negative values in array
function myFunction8(a) {
  let count = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(myFunction8([1, -2, 2, -4]));

// 9 Sort an array of strings alphabetically
function myFunction9(a) {
  return a.sort();
}
console.log(myFunction9(["b", "c", "d", "a"]));

// 10 Sort an array of numbers in descending order
function myFunction10(arr) {
  return arr.sort((a, b) => {
    return b - a;
  });
}
console.log(myFunction10([4, 2, 3, 1]));

// 11 Calculate the sum of an array of numbers
function myFunction11(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
  //   a.reduce((acc, cur) => acc + cur, 0);
}
console.log(myFunction11([10, 100, 1000, 1]));

// 12 Return the average of an array of numbers
function myFunction12(a) {
  return a.reduce((a, b) => a + b, 0) / a.length;
}
console.log(myFunction12([10, 100, 40]));

// 13 Return the longest string from an array of strings
function myFunction13(arr) {
  let longString = "";
  arr.forEach((element) => {
    if (element.length > longString.length) {
      longString = element;
    }
  });
  return longString;
}
console.log(myFunction13(["I", "need", "candy"]));
// arr.reduce((a, b) => a.length <= b.length ? b : a)

// 14 Check if all array elements are equal
function myFunction14(arr) {
  return arr.every((elem) => elem === arr[0]);
}
console.log(myFunction14([10, 10, 10, 10]));
// new Set(arr).size === 1

// 15 Merge an arbitrary number of arrays
function myFunction15(...arr) {
  let newArr = [];
  let totalArr = newArr.concat(...arr);
  return totalArr;
}
console.log(myFunction15(["a", "b", "c"], [4, 5, 6]));
// return arrays.flat()

// 16 Sort array by object property
function myFunction16(arr) {
  return arr.sort((a, b) => a.b - b.b);
}
console.log(
  myFunction16([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);

// 17 Merge two arrays with duplicate values
function myFunction17(a, b) {
  let lastArr = [];
  let newArr = a.concat(b);
  let sortedArr = newArr.sort((a, b) => a - b);
  for (i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
    } else {
      lastArr.push(sortedArr[i]);
    }
  }
  return lastArr;
}
console.log(myFunction17([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
// return [...new Set([...a, ...b])].sort((x, y) => x - y);

// ⚡💀 13
