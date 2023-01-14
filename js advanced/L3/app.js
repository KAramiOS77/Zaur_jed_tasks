// 1. Array constructoruna isEmpty() , removeDuplicates(), removeFalsies(), clear() methodlari elave edin. Diqqet edin ki, bu methodlar butun yaradilan massivlerde olmus olsun. (Array.prototype-a elave edilsin)

let arr = [5, 4, 4, 3, 2, 1, "i am string", null, false, undefined];
Array.prototype.isEmpty = function () {
  return this.length == 0;
};

Array.prototype.removeDuplicates = function () {
  let lastArr = [];
  let sortedArr = this.sort((a, b) => a - b);
  for (i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
    } else {
      lastArr.push(sortedArr[i]);
    }
  }
  return lastArr;
};

Array.prototype.removeFalsies = function () {
  let lastArr = [];
  let sortedArr = this.sort((a, b) => a - b);
  for (i = 0; i < sortedArr.length; i++) {
    if (Boolean(sortedArr[i])) {
      lastArr.push(sortedArr[i]);
    }
  }
  return lastArr;
};

Array.prototype.clear = function () {
  this.length = 0;
  return this;
  // let empty = []; bu formada yazanda sadəcə başqa boş array qaytarır, ancaq, yuxarıdakı kimi yazanda faktiki arrayı clear edir.
  // return empty;
};

console.log(arr.removeFalsies());
console.log(arr.removeDuplicates());
console.log(arr.isEmpty());
console.log(arr.clear());

// 2. Object constructoruna objLength(), firstProperty(), lastProperty() kimi methodlar elave edin.
let obj = {
  prop1: "firstvalue",
  prop2: 2,
  prop3: undefined,
  prop4: "last",
};

Object.prototype.objLength = function () {
  let keys = Object.keys(this);
  let count = keys.length;
  return count;

  // ya da aşağıdakı kimi
  // let count = -1;
  // for (let key in this) {
  //   if (Object.keys(this)) {
  //     count++;
  //   }
  // }
  // return count;
};

Object.prototype.firstProperty = function () {
  let keys = Object.keys(this);
  return keys[0];
};

Object.prototype.lastProperty = function () {
  let keys = Object.keys(this);
  return keys[keys.length - 1];
};

console.log(obj.objLength());
console.log(obj.firstProperty());
console.log(obj.lastProperty());

// 3. Number constructoruna isPrime(), isEven(), isInfinity() kimi methodlar elave edin.
let num = Infinity;

Number.prototype.isPrime = function () {
  for (let i = 2; i < this; i++) {
    if (this == 1) {
      return false;
    } else if (this % i == 0) {
      return false;
    } else {
      return true;
    }
  }
};

Number.prototype.isEven = function () {
  if (this % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

Number.prototype.isInfinity = function () {
  if (this == Infinity) {
    return true;
  } else {
    return false;
  }
};

console.log(num.isPrime());
console.log(num.isEven());
console.log(num.isInfinity());

// 4. String constructoruna toCapitalize(), removeWhiteSpaces(), filterDigits() (cumleden reqemleri filterlesin ve geriye qaytarsin * ) // "a12li37".filterDigits()  // [1,2,3, 7]

let str = "this text contains both numbers, for exemple 1 2 3 and text";

String.prototype.toCapitalize = function () {
  return this[0].toUpperCase() + this.slice(1, this.length);
};

String.prototype.removeWhiteSpaces = function () {
  let smth = this.split(" ");
  return smth.reduce((a, b) => {
    return a + b;
  });
};

String.prototype.filterDigits = function () {
  let smth = this.split(" ").sort();
  let nums = [];
  for (let i = 0; i < smth.length; i++) {
    if (~~smth[i] !== 0) {
      nums.push(~~smth[i]);
    }
  }
  return nums;
};

console.log(str.toCapitalize());
console.log(str.removeWhiteSpaces());
console.log(str.filterDigits());

// Vehicle class-i yaradin. field-lari ( fuel , wheelCount, landOrAir)
// Asagidakilar Vehicle-den torenir.

// Car class-i yaradin. fieldlari: (model, country, fuel, wheelCount, landOrAir)

// Plane class-i yaradin. fieldlari (model, country, fuel, wheelCount, landOrAir)

// Calisin duzgun inheritance verin.

class Vehicle {
  constructor(fuel, wheelCount, landOrAir) {
    this.fuel = fuel;
    this.wheelCount = wheelCount;
    this.landOrAir = landOrAir;
  }
}

class Car extends Vehicle {
  constructor(model, country, fuel, wheelCount, landOrAir) {
    super(fuel, wheelCount, landOrAir);
    this.model = model;
    this.country = country;
  }
}

class Plane extends Vehicle {
  constructor(model, country, fuel, wheelCount, landOrAir) {
    super(fuel, wheelCount, landOrAir);
    this.model = model;
    this.country = country;
  }
}

const myCar = new Car("Mercedes", "Germany", "Diesel", 4, "Land");
const myPlane = new Plane(
  "Boeing 777",
  "England",
  "High octane petrolium",
  12,
  "Air"
);
console.log(myCar, myPlane);
