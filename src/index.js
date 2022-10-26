contents.addEventListener('click', function (event) {
  if (event.target.closest('a')) {
    let conf = confirm(`Are you go to the ${event.target.closest('a').getAttribute('href')}`)
    console.log(conf)
    if (!conf) event.preventDefault();
  }
})