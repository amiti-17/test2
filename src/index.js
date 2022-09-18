function rgb(r, g, b) {
  r = valid(r);
  g = valid(g);
  b = valid(b);
  r = convectorFrom10To16(r);
  g = convectorFrom10To16(g);
  b = convectorFrom10To16(b);
  return r + g + b;
}
function valid(number) {
  return number < 0 ? 0 : number > 255 ? 255 : number;
}
function convectorFrom10To16(number) {
  arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let a = Math.floor(number / 16);
  a = arr[a];
  let b = number % 16;
  b = arr[b];
  return a + b;
}
console.log(rgb(45, -8, 899));
