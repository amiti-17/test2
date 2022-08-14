const arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(x, y) {
  return function(arri) {
    return (x <= arri && arri <= y);
  }
}
function inArray(array) {
  return function(arri) {
    return array.includes(arri);
  }
}

const result1 = arr.filter(inBetween(3, 6)) ; // 3,4,5,6
console.log("result: ", result1);
const result2 = arr.filter(inArray([1, 2, 10]));
console.log(result2); // 1,2