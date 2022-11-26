//Task 1
let obj1 = {
  marka: "porsche",
  model: "CayyenneS",
};

let obj2 = {};

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
function deleteProperty(property, object) {
  return delete object[property];
}
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
counter();
console.log(say);
