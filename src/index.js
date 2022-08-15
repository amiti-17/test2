function sum(a) {
  let currentSum = a;
  function f(b) {
    currentSum += b;
    return f;
  }
  f.toString = function() {
    return currentSum;
  };
  return f;
}
console.log( sum(1)(2).toString()); // 3
document.write( sum(5)(-1)(2) + "<br>"); // 6
document.write( sum(6)(-1)(-2)(-3) + "<br>"); // 0
document.write( sum(0)(1)(2)(3)(4)(5) + "<br>"); // 15
