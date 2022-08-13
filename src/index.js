const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// eslint-disable-next-line no-shadow
function listreader(list) {
  if (list.next) {
    listreader(list.next);
    console.log(list.value);
  } else {
    console.log(list.value);
  }
}
let tmp = list;
let arr = [];
while (tmp) {
  arr.push(tmp.value);
  tmp = tmp.next;
}
for (let i = arr.length - 1; i >= 0; i--) {
  document.write(arr[i])
}
listreader(list);
