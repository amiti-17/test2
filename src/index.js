function showNotification(obj) {
  const { className, html, right, top } = obj;
  const div = document.createElement('div');
  div.classList = className;
  div.textContent = html;
  div.style.right = right;
  div.style.top = top;
  document.body.append(div);
  setTimeout(() => div.remove(), 1500);
}

showNotification({
  className: 'welcome', // дополнительный класс для div (необязательно)
  html: 'What`s problem?', // HTML-уведомление
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
});
