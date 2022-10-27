//document.addEventListener('keydown', function (event)) { }
let pressed = new Set();
document.addEventListener('keydown', function (event) {
  console.log('pressed: ', event.code);
  pressed.add(event.code);
  runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW")
  //console.log(pressed)
})
document.addEventListener('keyup', function (event) {
  console.log('unpressed: ', event.code);
  pressed.delete(event.code);
  //console.log(pressed)
})
function runOnKeys(func, ...keys) {
  let arr = Array.from(keys);
  if (arr.every((el) => pressed.has(el))) {

    func()
  }
}
//document.body.addEventListener('keydown', runOnKeys(alert('cool'), 'KeyQ', 'KeyO'))
function checked() {
  console.log('good')
}