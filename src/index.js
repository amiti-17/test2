const hamster = {
  eat(food) {
    this.stomach ? this.stomach.push(food) : this.stomach = []
    this.stomach.push(food);
  },
};

const speedy = {
  __proto__: hamster,
};

const lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple
