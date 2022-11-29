//Task 1
let obj1 = {
  marka: "porsche",
  model: "CayyenneS",
};

let obj2 = {};

// // obj2 = Object.assign({}, obj1); // // funsiyasız

function deepclone(a, b) {
  for (let key in a) {
    b[key] = a[key];
  }
}
deepclone(obj1, obj2);
console.log(obj2, obj1);

// A: Object.assign ve ya spread operatoru daha yaxsi olardi. // Asagidaki kimi bir funksiya yazdim, ancaq alinmadi ((

// A:  return etmemisen)))


// function deepcloneV2(a, b) {
//   b = Object.assign({}, a);
// }
// deepcloneV2(obj1, obj2);
// console.log(obj2, obj1);

//Task 2
let ob = {
  ad: "far",
  soyad: "near",
};
//A: return etmeye ehtiyac yoxdu
function deleteProperty(property, object) {
  delete object[property];
}

// A: dersde izah etdik.
// delete object.property islemedi [] isledi
deleteProperty("ad", ob);
console.log(ob);

//Task 3
let o = {
  hadise: "qeza",
  derecesi: "dehsetli",
  ziyan: 20000,
};

function counter(a) {
  let say = 0;
  for (let key in a) {
    say += 1;
  }
  return say;
}
//A: yaxsi olardi ki, counter-i object-e gore cagirardiq (argument vereydik ve o bize sayi return ederdi). Globalda say yazmaq duz deyil
let netice = counter(o);
console.log(netice);
