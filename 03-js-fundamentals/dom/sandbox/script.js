const text = document.querySelector("p");
const btn = document.querySelector(".button")
const names = document.querySelectorAll(".name");



const getInputText = () => {
    text.innerHTML = `${names[0].value} ${names[1].value}`
};

btn.addEventListener("click", getInputText);