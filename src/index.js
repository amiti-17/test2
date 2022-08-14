function makeCounter() {
  let counter = 0;
  return (function() {
    return counter++;
  });
}
const a = makeCounter();
const b = makeCounter();
const c = makeCounter();
console.log('a', a());
console.log('b', b());
console.log('a', a());
console.log('a', a());
console.log('b', b());
console.log('c', c());
console.log('c', c());
console.log('a', a());
console.log('a', a());
console.log('a', a());
console.log('a', a());
