let table = document.body.firstElementChild;
for (let i = 0; i <= Array.from(table.rows).length; i++) {
  table.rows[i].cells[i].style.backgroundColor = 'red';
}
