let ul = document.createElement('ul')
document.body.prepend(ul)
ul.id = 'id55'
let bool = true
while (bool) {
  let value = prompt('Enter data for list...', 'data')
  if (value) {
    let li = document.createElement('li')
    li.textContent = value
    console.log(value)
    ul.append(li)
  } else {
    console.log(value)
    bool = false
  }
}