document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  let mainNavLinks = document.querySelectorAll('nav ul li a')
  let mainSections = document.querySelectorAll('main section')

  let lastId
  let cur = []

  window.addEventListener('scroll', () => {
    let fromTop = window.scrollY

    mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash)

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('current')
      } else {
        link.classList.remove('current')
      }
    })
  })
})
