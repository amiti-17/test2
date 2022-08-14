let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
  { name: "Tim", age: 17, surname: "Shkandiuk"}
];

function byField(field) {
  return (function(a, b) { 
    console.log(a[field])
    return (a[field] > b[field] ? 1 : -1);
})}

users.sort(byField('surname'));
console.log(users);