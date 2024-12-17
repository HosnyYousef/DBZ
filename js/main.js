
// dark mode toggle:

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }


// List of random characters
const randomDrinks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 37, 38, 39, 40,
  42, 43, 44
];


// Random Starting character
const random = (Math.floor(Math.random() * randomDrinks.length))
let drinkList = (randomDrinks[random]);
console.log(drinkList)
  
fetch(`https://dragonball-api.com/api/characters/${drinkList}`)
.then(res => res.json()) // parse response as JSON
.then(data => {
      console.log(data)
    document.querySelector('h2').innerText = data.name
    document.querySelector('img').src = data.image
    document.querySelector('h3').innerText = data.description
})
.catch(err => {
        console.log(`error ${err}`)
})


// cycling through the characters:

setInterval (function getDrink(){
    const random = (Math.floor(Math.random() * randomDrinks.length))
    let drinkList = (randomDrinks[random]);
    console.log(drinkList)
    
  fetch(`https://dragonball-api.com/api/characters/${drinkList}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
        console.log(data)
      document.querySelector('h2').innerText = data.name
      document.querySelector('#dbzImg').src = data.image
      document.querySelector('h3').innerText = data.description
  })
  .catch(err => {
          console.log(`error ${err}`)
  });
}, 10000) // changes every 10 seconds
  // https://web.dragonball-api.com/documentation

