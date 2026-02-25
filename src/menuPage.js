import mask from './assets/images/mask1.png'
import kebabSmall1 from './assets/images/kebab-small1.webp'
import kebabSmall2 from './assets/images/kebab-small2.webp'
import kebabSmall3 from './assets/images/kebab-small3.webp'
import kebabSmall4 from './assets/images/kebab-small4.webp'

export function renderMenu () {
  const content = document.querySelector('#content')

  /* menu content */
  const menuContent = document.createElement('div')
  menuContent.className = 'menu__content'
  /* menu title */
  const menuTitle = document.createElement('div')
  menuTitle.className = 'menu__title'
  const titleH1 = document.createElement('h1')
  titleH1.innerText = 'Try out our'
  titleH1.className = ''
  const titleSpan = document.createElement('span')
  titleSpan.innerText = 'Specials'
  menuTitle.append(titleH1, titleSpan)
  /* menu dishes */
  const menuDishes = document.createElement('div')
  menuDishes.className = 'menu__dishes'
  /* menu item */
  /* #1 */
  const menuItem1 = document.createElement('div')
  menuItem1.className = 'menu__item'
  const itemImg1 = document.createElement('img')
  itemImg1.className = 'item__image'
  itemImg1.src = kebabSmall1
  itemImg1.width = 250
  itemImg1.alt = 'Chicken Doner Kebab in Pita'
  const itemName1 = document.createElement('h2')
  itemName1.className = 'item__name'
  itemName1.innerText = 'Chicken Doner Kebab in Pita'
  const itemPricing1 = document.createElement('h3')
  itemPricing1.className = 'item__pricing'
  itemPricing1.innerText = '$9.89/-'
  menuItem1.append(itemImg1, itemName1, itemPricing1)
  /* #2 */
  const menuItem2 = document.createElement('div')
  menuItem2.className = 'menu__item'
  const itemImg2 = document.createElement('img')
  itemImg2.className = 'item__image'
  itemImg2.src = kebabSmall2
  itemImg2.width = 250
  itemImg2.alt = 'Beef/Lamb Doner Wrap'
  const itemName2 = document.createElement('h2')
  itemName2.className = 'item__name'
  itemName2.innerText = 'Beef/Lamb Doner Wrap'
  const itemPricing2 = document.createElement('h3')
  itemPricing2.className = 'item__pricing'
  itemPricing2.innerText = '$10.99/-'
  menuItem2.append(itemImg2, itemName2, itemPricing2)
  /* #3 */
  const menuItem3 = document.createElement('div')
  menuItem3.className = 'menu__item'
  const itemImg3 = document.createElement('img')
  itemImg3.className = 'item__image'
  itemImg3.src = kebabSmall3
  itemImg3.width = 250
  itemImg3.alt = 'Mixed Meat Doner in Pita'
  const itemName3 = document.createElement('h2')
  itemName3.className = 'item__name'
  itemName3.innerText = 'Mixed Meat Doner in Pita'
  const itemPricing3 = document.createElement('h3')
  itemPricing3.className = 'item__pricing'
  itemPricing3.innerText = '$11.49/-'
  menuItem3.append(itemImg3, itemName3, itemPricing3)
  /* #4 */
  const menuItem4 = document.createElement('div')
  menuItem4.className = 'menu__item'
  const itemImg4 = document.createElement('img')
  itemImg4.className = 'item__image'
  itemImg4.src = kebabSmall4
  itemImg4.width = '250'
  itemImg4.alt = 'Beef Shawarma-Style Wrap'
  const itemName4 = document.createElement('h2')
  itemName4.className = 'item__name'
  itemName4.innerText = 'Beef Shawarma-Style Wrap'
  const itemPricing4 = document.createElement('h3')
  itemPricing4.className = 'item__pricing'
  itemPricing4.innerText = '$7.99/-'
  menuItem4.append(itemImg4, itemName4, itemPricing4)

  /* appends */
  menuDishes.append(menuItem1, menuItem2, menuItem3, menuItem4)
  menuContent.append(menuTitle, menuDishes)
  content.append(menuContent)
}
