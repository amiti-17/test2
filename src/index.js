function* pseudoRandom(seed) {
  while (true) {
    seed = (seed * 16807) % 2147483647;
    yield seed;
  }
}
let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073
