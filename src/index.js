for (let elem of document.querySelector('ul').querySelectorAll('*')) {
  let len = elem.querySelectorAll('*');
  let arr = [];
  for (let el of len) {
    if (el.matches('li')) arr.push(el);
  }
  let word = Array.from(elem.firstChild.data);
  if (/*(elem.matches('ul') && elem.firstChild.data) || */ elem.matches('li')) {
    //console.log(elem.firstChild.data.toString());
    alert(wordCut(word).replace(/(\r\n|\n|\r)/gm, "") + ' ' + arr.length);
  }
}
function wordCut(word) {
  while (word[word.length - 1] == ' ') {
    word = word.slice(0, -1)
  }
  return word.join('')
  // if (word[word.length - 1] == " ") {
  //   console.log('3')
  //   return word
  // } else {
  //   return wordCut(word.slice(0, -1))
  // }
  // return word.split(' ').join('')
}
// console.log('        hi     '.slice(0, -1), 'hellow');
// console.log(wordCut('hi     '), 'hellow');
