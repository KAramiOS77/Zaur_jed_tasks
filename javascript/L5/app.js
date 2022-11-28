function add(a, b, callback) {
  callback();
  return a + b;
}
//A: "" dirnaqlari yigisdiraq z/o
add(5, 6, "alert");

// A: callback-e ehtiyac yoxdur 
function callback() {}
