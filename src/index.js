import './styles.css'
import { renderInit } from './initPage.js'
import { renderMenu } from './menuPage.js'
import { renderAbout } from './aboutPage.js'

const homePage = document.querySelector('#home-page')
const menuPage = document.querySelector('#menu-page')
const aboutPage = document.querySelector('#about-page')

/* load initial page on page load */
document.addEventListener('DOMContentLoaded', () => {
  renderInit()
})

/* - TABBING -  */
homePage.addEventListener('click', () => {
  content.replaceChildren()
  renderInit()
  console.log('test')
})
menuPage.addEventListener('click', () => {
  content.replaceChildren()
  renderMenu()
  console.log('test')
})
aboutPage.addEventListener('click', () => {
  content.replaceChildren()
  renderAbout()
  console.log('test')
})
