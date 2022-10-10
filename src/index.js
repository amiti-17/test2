function aclean(arr) {
  let myArr = [];
  for (let j = 0; j < arr.length; j++) {
    let currentMap = convertWordIntoMap(arr[j]);
    let checker = [];
    if (myArr.length == 0) {
      myArr.push(arr[j]);
    } else {
      for (let i = 0; i < myArr.length; i++) {
        let oneOfUniqMap = convertWordIntoMap(myArr[i]);
        checker.push(compareMapBool(currentMap, oneOfUniqMap));
      }
      let checkerArr = checker.filter((check) => (check ? true : false));
      if (checkerArr[0]) {
        continue;
      } else {
        myArr.push(arr[j]);
      }
    }
  }
  return myArr;
}

function convertWordIntoMap(word) {
  word = word.toLowerCase().split("");
  let currentMap = new Map();
  word.forEach((element) => {
    if (currentMap.get(element)) {
      currentMap.set(element, currentMap.get(element) + 1);
    } else {
      currentMap.set(element, 1);
    }
  });
  return currentMap;
}

function compareMapBool(map1, map2) {
  let check1 = false;
  let check2 = false;
  for (const elem of map1.keys()) {
    if (map2.has(elem) && map2.get(elem) === map1.get(elem)) {
      check1 = true;
    } else {
      check1 = false;
      return false;
    }
  }
  for (const elem of map2.keys()) {
    if (map1.has(elem) && map1.get(elem) === map2.get(elem)) {
      check2 = true;
    } else {
      check2 = false;
      return false;
    }
  }

  return check1 && check2 ? true : false;
}

let values = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(values));
