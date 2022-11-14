// Task1. Ureyimde bir reqem tutmusam 0-dan 50ye qeder. User her defesinde hemin ededi sorusun. Eger sehvdirse, yeniden sorussun. Duz olanda, kapital bank hesabinda 1000 manat kocurulsun console-a cixarin.

let randomEded = parseInt(Math.random() * 100 - 49); 
// A: fix please Math.random() * 50. Ehtiyac yoxdu, 100e qeder verib, 49 cixmaqdan
let userEded = Number(prompt("Ededi daxil edin:"));
let say = 1;
while (randomEded !== userEded) {
  say++;
  if (randomEded > userEded) {
    userEded = Number(prompt("Daha boyuk eded daxil edin:"));
  } else {
    userEded = Number(prompt("Daha kicik eded daxil edin:"));
  }
}
if (say === 1) {
  console.log("kapital bank hesabiniza 1000 manat koçuruldu");
} else if (say >= 2 && say <= 5) {
  console.log("kapital bank hesabiniza 750 manat koçuruldu");
} else if (say >= 6 && say <= 9) {
  console.log("kapital bank hesabiniza 250 manat koçuruldu");
} else if (say >= 10) {
  console.log("kapital bank hesabinizdan 250 manat silindi");
}
console.log(`Tebrik edirik, ${say} defeye tapdiniz. Eded ${randomEded} idi. `);

// TASK2. 1-den verilen edede qeder olan ededlerin cemi.
let ed = Number(
  prompt(
    "1-den verilen edede qeder olan ededlerin cemini tapmaq ucun eded daxil edin: "
  )
);
let cem = 0;
for (a = 1; a <= ed; a++) {
  cem = cem + a;
  //A: cem+=a
}
console.log(` 1 den ${ed} edede qeder olan ededlerin cemi  ${cem} edir.`);

// TASK3. ekranda bu formada sekil cekin
for (let n = 4; n >= 1; n--) {
  for (let m = 1; m <= n; m++) {
    document.write("*");
  }
  document.write("<br/>");
}

// TASK4.  1-den verilen edede qeder ededlerin hasili -=>  faktorial (5!= 1*2*3*4*5)

let eded = Number(prompt("Faktorialini tapmaq istediyiniz ededi daxil edin: "));
let fact = 1;
for (z = 1; z <= eded; z++) {
  //A: let z
  fact = fact * z;
}
console.log(` ${eded} ededinin faktoriali ${fact} edir.`);
