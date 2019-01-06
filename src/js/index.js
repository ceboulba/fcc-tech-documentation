document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')

  const menu = document.querySelector('.menu')

  const calcDistance = () => {
    const dist = menu.getBoundingClientRect();
    return dist
  }

  let toTop = calcDistance().y
  let menuWidth = calcDistance().width

  const toFixed = () => {
    console.log('toTop=>',window.scrollY)
    if(window.scrollY > toTop) {
      menu.classList.add('fixed')
      menu.style.width = `${menuWidth}px` ;
    } else{
      menu.classList.remove('fixed')
    }
    
  }

  window.addEventListener('scroll', toFixed)
  window.addEventListener('resize',()=>{
    toTop = calcDistance().y
    menuWidth = calcDistance().width
    toFixed
  })

})
