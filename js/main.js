
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = (document.querySelector('input').value)

 
fetch("https://dragonball-api.com/api/characters/" + drink)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
        console.log(data.items)
      document.querySelector('h2').innerText = data.items[0].name
      document.querySelector('img').src = data.items[0].image
      document.querySelector('h3').innerText = data.items[0].description
  })
  .catch(err => {
          console.log(`error ${err}`)
  });
}
  // https://web.dragonball-api.com/documentation

// const randomDrinks = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10
// ]

// const random = (Math.floor(Math.random() * randomDrinks.length))
// let drinkList = (randomDrinks[random]);
// console.log(drinkList)

// fetch ("https://dragonball-api.com/api/characters"+ drinkList)
//     .then (res => res.json()) // parse response as JSON
//     .then (data => {
//       console.log(data)
//       document.querySelector('h2').innerText = data.items.name
//       document.querySelector('img').src = data.items.image
//       document.querySelector('h3').innerText = data.items.description
//     })
//     .catch(err => {
//       console.log(`error ${err}`)
//     })

// // Get Elements
// setInterval (function getDrink(){
//   const random = (Math.floor(Math.random() * randomDrinks.length))
//   let drinkList = (randomDrinks[random]);
//   console.log(drinkList)

//   let apiImages = ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkList)
  
//   fetch(apiImages)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data.drinks)
//     document.querySelector('h2').innerText = data.drinks[0].strDrink
//     document.querySelector('img').src = data.drinks[0].strDrinkThumb
//     document.querySelector('h3').innerText = data.drinks[0].strInstructions
//   })
//   .catch(err => {
//       console.log(`error ${err}`)
//   });
// }, 2000) // change every 10 seconds
