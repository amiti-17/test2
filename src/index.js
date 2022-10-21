const div = document.createElement('div');
const buttonStart = document.createElement('button');
const buttonStop = document.createElement('button');
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let timer = 0;

function resetTimer(timer) {
  clearInterval(timer)
}

function refreshSecond(second) {
  let spanSecond = document.createElement('span');
  spanSecond.innerHTML = second;
  spanSecond.style.color = "blue";
  div.lastElementChild.replaceWith(spanSecond)
}

function refreshMinute(minute) {
  let spanMinute = document.createElement('span');
  spanMinute.innerHTML = minute;
  spanMinute.style.color = "green";
  div.lastElementChild.previousElementSibling.replaceWith(spanMinute)
}

function refreshHour(hour) {
  let spanHour = document.createElement('span');
  spanHour.innerHTML = hour;
  spanHour.style.color = "red";
  div.firstElementChild.replaceWith(spanHour)
}

document.body.append(div, buttonStart, buttonStop)
div.innerHTML = '<span>hour</span>:<span>minutes</span>:<span>seconds</span>'

buttonStop.innerHTML = 'Stop';
buttonStart.innerHTML = 'Start';
buttonStop.onclick = () => { resetTimer(timer); timer = 0 }
buttonStart.onclick = () => {
  if (timer) { } else {
    timer = setInterval(() => {
      date = new Date();
      second = date.getSeconds();
      refreshHour(hour);
      refreshMinute(minute);
      refreshSecond(second);
      console.log(hour, minute, second);
    }, 1000);
  }
}

console.log(hour, minute, second)