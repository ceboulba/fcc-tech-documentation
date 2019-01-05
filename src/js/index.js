import { Z_FIXED } from "zlib";

// document.addEventListener('DOMContentLoaded', () => {
//   // Get all "navbar-burger" elements
//   const $navbarBurgers = Array.prototype.slice.call(
//     document.querySelectorAll('.navbar-burger'),
//     0
//   )

//   // Check if there are any navbar burgers
//   if ($navbarBurgers.length > 0) {
//     // Add a click event on each of them
//     $navbarBurgers.forEach(el => {
//       el.addEventListener('click', () => {
//         // Get the target from the "data-target" attribute
//         const target = el.dataset.target
//         const $target = document.getElementById(target)

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         el.classList.toggle('is-active')
//         $target.classList.toggle('is-active')
//       })
//     })
//   }
// })

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')

  const menu = document.querySelector('.menu')

  const calcDistance = () => {
   const dist = menu.getBoundingClientRect().y;
  //  console.log('dist =>',dist)
   return dist
  }

  const toTop = calcDistance()

  window.addEventListener('resize', calcDistance)

  console.log('menu => ', calcDistance())

  // const width = document.querySelector('.width')
  // width.textContent = window.innerWidth

  // function resize() {
  //   width.textContent = window.innerWidth

  //   // width.textContent = 'resize'
  // }

  // // window.resize = resize()
  // window.addEventListener('resize', resize)
})
