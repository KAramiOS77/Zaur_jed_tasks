//1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun.
// A: done ✅
function number() {
  let array = [];
  array.length = 5;
  for (let i = 0; i < array.length; i++) {
    array[i] = +prompt("Enter number");
  }
  return array;
}
let arr = number();
console.log(arr);

//2. Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin.
// A: done ✅
let array = [2, 3, 5, 5];
function multiplyer(array) {
  let multi = 1;
  for (let i = 0; i < array.length; i++) {
    multi *= array[i];
  }
  return multi;
}
let hasil = multiplyer(array);
console.log(hasil);

//3. multiply(a,b,c) funksiyasi yaradin. Men ona istediyim sayda argument versem bele islemelidir, hasilini geri qaytarmalidir.
// A: done ✅
function multiply(...massiv) {
  let hasil = 1;
  for (let i = 0; i < massiv.length; i++) {
    hasil *= massiv[i];
  }
  return hasil;
}
let answer = multiply(2, 3, 5, 7, 8);
console.log(answer);

//4. Funksiya yazin ki, array ve eded verim. Hemin ededden basqa digerlerinden ibaret yeni array qaytarsin Mes, removeElement( [1,2,3,4] ,3 ) // [1,2,4]
// A: done ✅
function removeElementFromArray(array, remove) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === remove) {
      array.splice(i, 1);
    }
  }
  return array;
}

let deletechar = removeElementFromArray([1, 2, 3, 4, 5, 6], 4);
console.log(deletechar);
