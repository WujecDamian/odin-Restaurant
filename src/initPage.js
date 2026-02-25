import kebabBig from './assets/images/kebab-big.webp'
import kebabSmall1 from './assets/images/kebab-small1.webp'
import kebabSmall2 from './assets/images/kebab-small2.webp'
import kebabSmall3 from './assets/images/kebab-small3.webp'
import kebabSmall4 from './assets/images/kebab-small4.webp'

export function renderInit () {
  const content = document.querySelector('#content')
  /* create logo wrapper div */
  const logoWrapper = document.createElement('div')
  logoWrapper.classList.add('logo--wrapper')
  /* logo */
  const logo = document.createElement('div')
  logo.classList.add('logo')
  /* logo-top */
  const logoTop = document.createElement('div')
  logoTop.innerText = 'THE NOTORIOUS'
  logoTop.classList.add('logo--top')
  /* logo-main */
  const logoMain = document.createElement('div')
  logoMain.innerText = 'Friends Kebab'
  logoMain.classList.add('logo--main')
  /* logo-bottom */
  const logoBottom = document.createElement('div')
  logoBottom.innerText = 'All the way from Instanbul'
  logoBottom.classList.add('logo--bottom')

  logo.append(logoTop, logoMain, logoBottom)
  logoWrapper.append(logo)

  /* kebab image */
  const kebab = document.createElement('div')
  kebab.classList.add('kebab')
  const kebabImage = document.createElement('img')
  kebabImage.src = kebabBig // ← from your webpack import
  kebabImage.alt = 'Delicious kebab photo' // ← accessibility + SEO
  kebabImage.width = 550 // optional
  kebabImage.className = 'kebab__image'

  kebab.append(kebabImage)
  logoWrapper.append(kebab)
  content.append(logoWrapper)

  /* small kebab images */
  const imagesWrapper = document.createElement('div')
  imagesWrapper.className = 'images__wrapper'
  /* small images */
  const img1 = document.createElement('img')
  img1.src = kebabSmall1 // ← from your webpack import
  img1.alt = 'Picture of tasty kebab - friends kebab' // ← accessibility + SEO
  img1.width = 100 // optional
  img1.className = 'images__item'

  const img2 = document.createElement('img')
  img2.src = kebabSmall2 // ← from your webpack import
  img2.alt = 'Picture of delicious rollo kebab - chicken gemuse kebab' // ← accessibility + SEO
  img2.width = 100 // optional
  img2.className = 'images__item'

  const img3 = document.createElement('img')
  img3.src = kebabSmall3 // ← from your webpack import
  img3.alt = 'Ground Beef Kebab - friends kebab best kebap USA' // ← accessibility + SEO
  img3.width = 100 // optional
  img3.className = 'images__item'

  const img4 = document.createElement('img')
  img4.src = kebabSmall4 // ← from your webpack import
  img4.alt = 'Picture of 100% Vegan Kebab - best kebab choice!' // ← accessibility + SEO
  img4.width = 100 // optional
  img4.className = 'images__item'

  /* append small images to wrapper */
  imagesWrapper.append(img1, img2, img3, img4)
  content.append(imagesWrapper)
}
