const arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(arri, x, y) {
  if(x <= arri && arri <= y) {
    console.log("yes")
    return true;
  } else {
    return false;
  }
}
function inArray(arri, array) {
  return array.includes(arri);
}

const result1 = arr.filter(
  (arri) => {return inBetween(arri, 3, 6)}
); // 3,4,5,6
console.log(result1);
const result2 = arr.filter(
  (arri) => {return inArray(arri, [1, 2, 10])}
);
console.log(result2); // 1,2