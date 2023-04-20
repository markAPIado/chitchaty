import Router from './Router.js'

window.addEventListener('load', () => {
  document.querySelector('.global-loader').style.display = 'none'
})

window.addEventListener('DOMContentLoaded', () => {
  Router.init()
})
