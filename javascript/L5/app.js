// Task 1
// A: if-e ehtiyac yoxdu. Sadece, callback-e argument kimi ver bitsin))
// A: if-i sil. callback(a+b) ver bes eder
function add(a, b, callback) {
  callback(a + b);
}
add(5, 6, console.log);

// Task 2
// A: done ✅
function gender(cins) {
  if (cins === "K") {
    return function (name) {
      console.log(`Cənab ${name}`);
    };
  } else if (cins === "Q")
    return function (name) {
      console.log(`Xanım ${name}`);
    };
}
const forMan = gender("K");
forMan("Kərəm");
const forWoman = gender("Q");
forWoman("Əsli");
