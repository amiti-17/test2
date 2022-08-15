function makeCounter() {
  let count = 0;
  function counter() {
    return count++;
  };
  counter.set = function(x) {
    count = x;
    return count;
  }
  counter.decrease = function() {
    return --count;
  }
  return counter;
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // установить новое значение счётчика

alert( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

alert( counter() ); // 10 (вместо 11)

// =======
// function sum(a) {
//   let currentSum = a;
//   function f(b) {
//     currentSum += b;
//     return f;
//   }
//   f.toString = function() {
//     return currentSum;
//   };
//   return f;
// }
// console.log( sum(1)(2).toString()); // 3
// document.write( sum(5)(-1)(2) + "<br>"); // 6
// document.write( sum(6)(-1)(-2)(-3) + "<br>"); // 0
// document.write( sum(0)(1)(2)(3)(4)(5) + "<br>"); // 15
// >>>>>>> master
