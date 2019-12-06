let h1 = document.getElementsByTagName('h1')[0]
const btn = document.getElementsByTagName('button')[0]

h1.addEventListener('click', () => {
  h1.innerHTML = 'Treehouses'

  if (h1.innerHTML == 'Treehouses') {
    h1.style.cssText = ' color : red; opacity : 50%; font-size : 3rem;'
  }
})

btn.addEventListener('click', () => {
  if (h1.innerHTML == 'Treehouse') {
    h1.style.display === 'block'
  }

  if (h1.style.display === 'block') {
    h1.style.cssText = ' color : red; opacity : 50%; font-size : 5rem;'
  } else {
    h1.style.cssText = 'font-size: 6rem;
      color: #fff;
      color: #6de2ff;
      line-height: 2.5rem;'
  }
})

// if (h1.innerHTML == 'Test') {
//   h1.style.cssText = ' color : #fff; opacity : 100%; font-size : 5rem;'

//   console.log('Alert! Alert! this is just a test')
// }

//= =======================

// const person = {
//   firstName: 'Nathan',
//   LastName: 'Daniels'
// }

// const { firstName: fname, lastName: lname } = person
