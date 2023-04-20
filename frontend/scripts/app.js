import Router from './Router.js'

// Add loding animation while the page is loading

window.addEventListener('load', () => {
  document.querySelector('.global-loader').style.display = 'none'
})



window.addEventListener('DOMContentLoaded', () => {
  Router.init()
})
