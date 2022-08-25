// Function.prototype.defer = function(ms, ...args) {
//   setTimeout(() => this(...args), ms);
// }
// function f(name) {
//   console.log(name);
// }

// f.defer(1000, 'tim');

Function.prototype.defer = function(ms) {
  return (...args) => {
    setTimeout(() => {this(...args)}, ms);
  }
}
function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 5)