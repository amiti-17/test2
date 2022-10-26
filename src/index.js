let table = document.getElementById('grid')
let collator = new Intl.Collator("ru-RU", { numeric: true })
table.addEventListener('click', function (event) {
  if (event.target.tagName != 'TH') { return }
  let arr = []
  let arrI = [];
  for (let elem of event.target.parentNode.children) {
    arrI.push(elem.innerHTML)
  }
  let indexOfSortColumn = arrI.indexOf(event.target.innerHTML)
  console.log()
  for (let elem of table.lastElementChild.children) {
    arr.push(elem);
  }
  console.log(arr[0].children[indexOfSortColumn])
  arr.sort((first, second) => {
    console.log(first.children[indexOfSortColumn].innerHTML, second.children[indexOfSortColumn].innerHTML, collator.compare(first.children[indexOfSortColumn].innerHTML, second.children[indexOfSortColumn].innerHTML))
    return collator.compare(first.children[indexOfSortColumn].innerHTML, second.children[indexOfSortColumn].innerHTML)
  })
  arr.forEach((el) => table.lastElementChild.append(el))
  //table.lastElementChild.prepend(arr)
  console.log(table.lastElementChild)
  console.log(arr)
})
