import kebabBig from './assets/images/kebab-big.webp'
import kebabSmall1 from './assets/images/kebab-small1.webp'
import kebabSmall2 from './assets/images/kebab-small2.webp'
import kebabSmall3 from './assets/images/kebab-small3.webp'
import kebabSmall4 from './assets/images/kebab-small4.webp'

export function renderAbout () {
  const content = document.querySelector('#content')

  const aboutUsWrapper = document.createElement('div')
  aboutUsWrapper.className = 'about'
  const aboutUs = document.createElement('h1')
  aboutUs.className = 'about__h1'
  aboutUs.innerText = 'Who are we?'

  const info = document.createElement('p')
  info.className = 'about__p'
  info.innerText = `Welcome to Friends Kebab - your go-to spot for the best Istanbul-style kebab in town!
We started Friends Kebab with one simple dream: to bring the authentic, mouthwatering flavors of Istanbul straight to you, any time of day or night. Whether it's a late-night craving after a long day, an early breakfast fix, or just because you deserve something epic - we're always open, ready to serve you hot, fresh, and full of flavor.
Our kebabs are the real deal: juicy, perfectly spiced meat (chicken, beef, lamb, or our famous mixed) slow-roasted on the vertical spit just like in the streets of Istanbul. We shave it thin and generous right in front of you, pile it high in warm pita or fluffy flatbread, and load it with crisp fresh veggies (tomatoes, cucumbers, onions, cabbage slaw), homemade sauces (garlic yogurt, spicy, or classic), and all the extras that make every bite unforgettable.
What sets us apart? We believe in going big. Every kebab comes extra generous - packed to the brim, overflowing with meat and goodness - even if you didn't ask for the large. No skimping here; we want you walking away stuffed, smiling, and already planning your next visit.
At Friends Kebab, it's not just food - it's friendship on a plate. Come as you are, any hour, and let us treat you like family. Because here, you're not just a customer... you're a friend.
Friends Kebab - Best Istanbul Kebab. Always Open. Always Big. Always Delicious.
Come hungry - leave happy!`

  aboutUsWrapper.append(aboutUs, info)
  content.append(aboutUsWrapper)
}
