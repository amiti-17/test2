let animals = ['тигр', 'ёж', 'еж', 'енот', 'ехидна', 'АИСТ', 'ЯК'];

const collator = new Intl.Collator('ru', {
  localeMatcher: 'best fit',
  usage: 'sort',
  sensitivity: 'base',
});
const collatorVariant = new Intl.Collator('ru', {
  localeMatcher: 'best fit',
  usage: 'sort',
  sensitivity: 'variant',
});

animals = animals.sort((word1, word2) => {
  return collator.compare(word1, word2)
    ? collator.compare(word1, word2)
    : collatorVariant.compare(word1, word2);
});

console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК
