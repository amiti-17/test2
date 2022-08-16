function printNumbers(from, to) {
  function subprintNumbers(i) {
    const idinterval = setInterval(() => {
      if (i <= to) {
        document.write(i++, '<br>');
      } else {
        clearInterval(idinterval);
      }
    }, 1000);
  }
  return subprintNumbers(from);
}

// function printNumbers(from, to) {
//   setTimeout(function run() {
//     if (from <= to) document.write(from++, '<br>'); setTimeout(run, 1000);
//   }, 1000);
// }

printNumbers(1, 10);