// 1
function myFunction1(a, b) {
  let newA = a.toString();
  let newB = b.toString();
  return newA === newB;
}
console.log(
  myFunction1(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);

// 2 Return the number of days between two dates
function myFunction2(a, b) {
  let now = Date.now();
  let msA = now - a.getTime();
  let sanA = parseInt(msA / 1000);
  let deqA = parseInt(sanA / 60);
  let saatA = parseInt(deqA / 60);
  let gunA = parseInt(saatA / 24);

  let msB = now - b.getTime();
  let sanB = parseInt(msB / 1000);
  let deqB = parseInt(sanB / 60);
  let saatB = parseInt(deqB / 60);
  let gunB = parseInt(saatB / 24);

  return Math.abs(gunA - gunB);

  //   const dif = Math.abs(a - b);
  //    return dif / 1000 / 60 / 60 / 24
}
console.log(myFunction2(new Date("2000-01-01"), new Date("2020-06-01")));

// 3 Check if two dates fall on the exact same day
function myFunction3(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
console.log(myFunction3(new Date("2000/11/01"), new Date("2000/01/01")));

// 4 Check if two dates are within 1 hour from each other
function myFunction4(a, b) {
  let newA = a.getTime();
  let newB = b.getTime();
  return Math.abs(newA - newB) / 1000 / 60 / 60 <= 1;
}
console.log(
  myFunction4(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:45:00"))
);

// 5 Check if one date is earlier than another
function myFunction5(a, b) {
  let newA = a.getTime();
  let newB = b.getTime();
  return newA < newB;
}
console.log(
  myFunction5(new Date("2000/01/01 08:45:00"), new Date("2000/01/01 08:00:00"))
);
