
// document.querySelector('button').addEventListener('click', getDrink)

// function getDrink(){
//     let drink = (document.querySelector('input').value)


// translate the text to english

// check the rest if there's time
  // Click to see transformations of the character
  // Pauses interval
  // with a button to start again


  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', 
        includedLanguages: 'et', 
        autoDisplay: false
    }, 'google_translate_element');
    var a = document.querySelector("#google_translate_element select");
    a.selectedIndex=1;
    a.dispatchEvent(new Event('change'));
}


const randomDrinks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 37, 38, 39, 40,
  42, 43, 44
];



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
      document.querySelector('img').src = data.image
      document.querySelector('h3').innerText = data.description
  })
  .catch(err => {
          console.log(`error ${err}`)
  });
}, 2000)
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
