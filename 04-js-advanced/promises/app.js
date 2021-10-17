//What is promise?

// let samsPromise = new Promise((resolve, reject) => {
//     let a = 1+1; 
//     if (a === 2) {
//         resolve("Success")
//     } else {
//         reject("Failed")
//     }
// })

// samsPromise
//     .then((message) => {
//         console.log(message + " I am in the THEN")
//     })
//     .catch((message) => {
//         console.log(message + " I am in the CATCH")
//     })


// https://randomuser.me/api/


// const getRandomUser = () => {
//     fetch("https://randomuser.me/api/")
//         .then(res => res.json())
//         .then(json => console.log(json.results[0].location.street.name))
//         .catch(err => console.log(err))
// };

// getRandomUser();

// https://api.pinkapi.com/v2/beers/random
//make a request to the above api from the response please the following in a card 
// name (h1) tagline (h4), description (p), abv (h2/3), the first food it pairs well with. 

const beerCard = document.querySelector(".card")

const createBeerCard = (beer) => {
    return `
    <div class = "beer_container">
    <h1 class = "name"> ${beer.name} </h1>
    <h2 class = "tagline"> ${beer.tagline} </h2> 
    <p  class = "desc"> ${beer.description} </p>
    <h3  class = "abv"> ${beer.abv}</h3> 
    <p class = "food_pairing"> ${beer.food_pairing[0]}</p>
    </div>`};

    const getRandomBeer = () => {
        fetch("https://api.punkapi.com/v2/beers/random")
            .then(res => res.json())
            .then(json => document.body.innerHTML += createBeerCard(json[0]));
    };
    getRandomBeer();
    