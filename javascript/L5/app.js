//A: "alert"?  alert funksiyasi kimi ver
function add(a, b, callback) {
  callback();
  return a + b;
}

add(5, 6, "alert");

function callback() {}
