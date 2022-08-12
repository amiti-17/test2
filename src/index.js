const room = {
  number: 23,
};

const meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

// eslint-disable-next-line no-undef
document.write(
  JSON.stringify(
    meetup,
    (key, value) => {
      console.log(`key: ${key}  value: ${value}`);
      return key !== '' && value === meetup ? undefined : value;
    },
    2,
  ),
);

// в результате должно быть:
// {
// "title":"Совещание",
// "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
// "place":{"number":23}
// }
// const backjson = JSON.parse(jsonstr);
// console.log(backjson);
