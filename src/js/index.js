window.addEventListener('load', function(e) {
  console.log('helloWorld')

  const navLinks = document.querySelectorAll('.nav-link')

  navLinks.forEach(e =>
    e.addEventListener('click', function(e) {
      console.log('e => ', e)
      e.target.classList.toggle('is-active')
    })
  )
})
