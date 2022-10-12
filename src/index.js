let a = prompt('Give me some expresion, i`ll try to count it)', '2*3-5');
a = new Function(`return ${a}`);
console.log(a());
