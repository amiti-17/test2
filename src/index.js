const handlers = Symbol('handlers');

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function (handler) {
    this[handlers].push(handler);
  };
  return new Proxy(target, {
    // get(target, prop, reciever) {
    //   let value = Reflect.get(...arguments);
    //   // target.observe(prop, value);
    //   return value;
    // },
    set(target, prop, value, reciever) {
      let result = Reflect.set(...arguments);
      if (result) {
        target[handlers].forEach((handler) => {
          handler(prop, value);
        });
      }
      return result;
    },
  });
}

let user = {};

user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = 'John'; // alerts: SET name=John
user.name = 'Tim';
