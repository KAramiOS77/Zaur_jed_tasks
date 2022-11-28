//Task 1
let obj1 = {
  marka: "porsche",
  model: "CayyenneS",
};

let obj2 = {};

// A: Object.assign ve ya spread operatoru daha yaxsi olardi. 
function deepclone(a, b) {
  for (let key in a) {
    b[key] = a[key];
  }
}
deepclone(obj1, obj2);
console.log(obj2, obj1);

//Task 2
let ob = {
  ad: "far",
  soyad: "near",
};
//A: return etmeye ehtiyac yoxdu
function deleteProperty(property, object) {
  return delete object[property];
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
let say = 0;
function counter() {
  for (let key in o) {
    say += 1;
  }
}
//A: yaxsi olardi ki, counter-i object-e gore cagirardiq (argument vereydik ve o bize sayi return ederdi). Globalda say yazmaq duz deyil
counter();
console.log(say);
