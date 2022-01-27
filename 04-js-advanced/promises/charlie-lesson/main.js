const quotes = document.querySelector("#quote-container")
let dogContainer = document.querySelector("#dog-container")
const dogButton = document.querySelector("#dog")

const dogsRandom = (dog) => {
    const arrayOfPics = dog.message
    arrayOfPics.forEach(pic => {
        let imgTag = `<img src  = ${pic}>`
        return dogContainer.innerHTML += imgTag
    })
}

const getApi = () => {
    fetch("https://dog.ceo/api/breeds/image/random/5").then(res => {
    return res.json()
}).then(dogsRandom)
}


fetch("https://api.kanye.rest").then(response => {
    console.log(response.json)
    return response.json()
}).then(data => {
    console.log(data)
    quotes.innerHTML = `<p>${data.quote}</p>`
})

dogButton.addEventListener("click", getApi)


const githubForm = document.querySelector("#github-form");
const githubInput = document.querySelector("#github-input");
const githubContainer = document.querySelector("#github-container");

githubForm.addEventListener("submit", event => {
    event.preventDefault();
    const value = githubInput.value
    const URL = "https://api.github.com/users/" + value
    fetch(URL)
        .then(res => {
        if(res.ok === true) {
            return res.json()
        }
        return Promise.reject(res)
        })
        .then(githubProfile => {
        githubContainer.innerHTML += `<img src=${githubProfile.avatar_url}/>`
         })
        .catch(error => {
             console.log(error)
        });
});
