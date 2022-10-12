let user = {
  name: 'John',
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, reciever) {
      if (Reflect.has(...arguments)) {
        return Reflect.get(...arguments);
      } else {
        throw new Error(`Свойство не существует: "${prop}"`);
      }
    },
  });
}

user = wrap(user);
try {
  console.log(user.name); // John
  console.log(user.age); // Ошибка: такого свойства не существует
} catch (error) {
  console.log(error.name);
}
