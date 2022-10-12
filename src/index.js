let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, index, reciever) {
    if (index < 0) {
      index = target.length + +index;
    }
    return Reflect.get(target, index, reciever);
  },
});

console.log(array[-1]); // 3
console.log(array[-3]); // 2
