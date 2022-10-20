let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
}
let div = document.createElement('div')
div.id = 'div'
document.body.append(div)

function createTree(container, data) {
  let ul = document.createElement('ul')
  for (let elem in data) {
    console.log(elem)
    if (isEmpty(data[elem])) {
      let li = document.createElement('li')
      li.textContent = elem
      ul.append(li)
    } else {
      let li = document.createElement('li')
      li.textContent = elem
      console.log(li)
      ul.append(li)
      createTree(ul, data[elem])
    }
  }

  container.append(ul)
}


function isEmpty(obj) {
  for (let elem in obj) {
    if (obj[elem]) { return false }
  }
  return true;
}


createTree(div, data)










