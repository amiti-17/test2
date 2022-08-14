function sum(a) {
  return function bb(b) {
    return a + b;
  };
}
console.log(sum(2)(3));
