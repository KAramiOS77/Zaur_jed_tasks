// 1. splitByOddAndEven  // arrayi 2 arraya bolsun. birincisi cutlerden teskil olunub, ikincisi teklerden
const array = [2, 3, 7, 6, 2, 4, 9];

function splitByOddAndEven(arr) {
  let odds = [];
  let evens = [];
  let sortedArray = arr.sort();
  let eleminatedArr = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i + 1]) {
      eleminatedArr.push(sortedArray[i]);
    }
  }
  eleminatedArr.filter((elem) => {
    if (elem % 2 === 1) {
      odds.push(elem);
    }
    if (elem % 2 === 0) {
      evens.push(elem);
    }
  });
  return [evens, odds];
}
console.log(splitByOddAndEven(array));

// 2. onlyUnique // tekrarlanmayan elementleri saxlayin, digerlerini silin.
const givenArr = [1, 1, 2, 3, 3, 4, 4, 5];
function onlyUnique(arr) {
  let newArray = [];
  let sortArray = arr.sort();
  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] !== sortArray[i + 1]) {
      newArray.push(sortArray[i]);
    } else {
      i++;
    }
  }
  return newArray;
}

console.log(onlyUnique(givenArr));

// // 3. findCommonWords  // 2 arraydeki ortaq sozleri geri qaytarin.

const firstArray = ["dog", "cat", "parrot"];
const secondArray = ["lizard", "rat", "cat"];

function findCommonWords(firstArray, secondArray) {
  let commonWords = [];
  for (let x in firstArray) {
    for (let y in secondArray) {
      if (firstArray[x] === secondArray[y]) {
        commonWords.push(firstArray[x]);
      }
    }
  }
  return commonWords;
}
let words = findCommonWords(firstArray, secondArray);
console.log(words);

// 4. sortTheArray  // reqemleri en qabaga cekin
const totalArr = ["b", 6, "a", "q", 7, 2];
function sortTheArray(arr) {
  let numberArr = [];
  let stringArr = [];
  totalArr.filter((elem) => {
    if (elem >= 0 || elem < 0) {
      numberArr.push(elem);
    } else {
      stringArr.push(elem);
    }
  });
  return numberArr.sort((a, b) => a - b).concat(stringArr.sort());
}
console.log(sortTheArray(totalArr));
