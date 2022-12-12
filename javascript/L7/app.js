//Task 1
// A: done ✅
function repeatedSymbolCounter(a, b) {
  let say = 0;
  for (let i of a) {
    if (i === b) {
      say++;
    }
  }
  return say;
}
let cem = repeatedSymbolCounter("KARAM", "A");
console.log(cem);

//Task 2
// A: slice ile daha yaxsi olar. Z/O o formada da yazaq
// A: Fix plz 🐜
function capitalize(str) {
  let word = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    word = word + str[i];
  }
  return word;
}
let cap = capitalize("alion");
console.log(cap);

//Task 3
// A: isleyirmi? gozlenilen bu-test-ucundur yazisidir.
function snakeToKebab(str) {
  return str.toLowerCase();
}

let kababcase = snakeToKebab("BU_TEST_UCUNDUR");
console.log(kababcase);

//Task 4
// A: boslugun index-ini tap ve ona gore slice et. Daha sonra birinci ve ikinci terefi istenilen formada birlesdir ve geri gonder.
function nameFormat(str) {
  let a = str.split(" ");
  return a[0] + " " + a[1][0] + ".";
}

let formatter = nameFormat("Alion GreenHeart");
console.log(formatter);

//Task 5
function ilkHerfiDeyis(str, s) {
  return s + str.slice(1, str.length); //A: length yazmamisan))) sehv yazmisansa nece isleyir?))
  //  // ya da replacele ede bilerik //   return str.replace(str[0], s);  // A: done ✅
}

let herfdeyisen = ilkHerfiDeyis("alion", "A");
console.log(herfdeyisen);

//Task 6
function splitSentence(sentence) {
  return sentence.split(" ");
}
let cumlebolen = splitSentence(
  "İstesen neinki cumleleri hetda, daglari bele bolerem" // A: sagol seni ejdaha 🐉
);
console.log(cumlebolen);

// Task 7 //A: done ✅
function removeCharacterFromString(str, any) {
  let a = str;
  for (let i = 0; i <= str.length; i++) {
    if (a[i] === any) {
      a = a.replace(a[i], "");
    }
  }
  return a;
}

let deletechar = removeCharacterFromString("KARAMAA", "A");
console.log(deletechar);
// ve ya return str.replaceAll(any, ""); // A: daha yaxsi ✅

// A: done ✅
//Task 8
function verifyGmail(input) {
  if (input.length >= 15 && input.endsWith("@gmail.com")) {
    console.log(`sizin daxil etdiyiniz email adresi ${input}`);
    alert(`sizin daxil etdiyiniz email adresi ${input}`);
  } else {
    console.log(
      `Sizin daxil etdiyiniz email adresi keçərsizdir! Minimum 5 simvol olmalıdır.`
    );
    alert(
      `Sizin daxil etdiyiniz email adresi keçərsizdir! Minimum 5 simvol olmalıdır.`
    );
  }
}
let verified = verifyGmail(prompt("Email adresinizi daxil edin:"));
console.log(verified);

//Task 9 A: done ✅
function dateWriter() {
  return document.write(new Date());
}
dateWriter();

// Task 10  A: done ✅
function weekDay() {
  const date = new Date();
  if (date.getDay() >= 1 && date.getDay() <= 5) {
    alert("Dərsə getmək lazımdır!");
  } else {
    alert("Dərs yoxdur!");
  }
}
weekDay();

//Task 11  A: done ✅
function ezrail(Birth_date) {
  const date = new Date();
  if (date.getFullYear() - Birth_date < 77) {
    alert(`${77 - (date.getFullYear() - Birth_date)} ilin qalib`);
  } else if (date.getFullYear() - Birth_date > 77) {
    alert(
      `o terefde ${date.getFullYear() - Birth_date - 77} ildi seni axtarirlar ` // A: 😂
    );
  } else {
    alert("Tam zamani"); // A: haydi js, haydi js, haydi, tam zamani tam zamani simdi)))
  }
}
ezrail(prompt("Dogum ilini qeyd edin:"));

// Task 12  A: done ✅
function timer() {
  const now = Date.now();
  const birthdate = new Date(prompt("il,ay,gun (ilk ay 0) daxil edin:"));
  let ms = now - birthdate.getTime();
  let san = parseInt(ms / 1000);
  let deq = parseInt(san / 60);
  let saat = parseInt(deq / 60);
  let gun = parseInt(saat / 24);
  let ay = parseInt(gun / 30);
  let il = parseInt(ay / 12);

  console.log(`${ms} ms`);
  console.log(`${san} san`);
  console.log(`${deq} deq`);
  console.log(`${saat} saat`);
  console.log(`${gun} gun`);
  console.log(`${ay} ay`);
  console.log(`${il} il`);
}
timer();

// Task 13 A: done ✅
function weekDay() {
  const weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday ",
    4: "Thursday ",
    5: "Friday ",
    6: "Saturday ",
  };
  const today = new Date();

  document.write(weekDays[today.getDay()]);
}
weekDay();

// Task 14  A: done ✅
function whichMonth() {
  const month = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const currentMonth = new Date();

  document.write(month[currentMonth.getMonth()]);
}
whichMonth();
