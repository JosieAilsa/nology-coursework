///Create a person object 
//Name, quote, skill1, skill2 , skill3  
// Create a html doc, lunk our js to our html 
//In HTML doc create a h2, p , ul, 3 LIs 
//In our JS doc, queryselectors for the html tags we just created 
//Set the innerHTML to be equal to the relevant properties of the objects 

//e.g h2.innerHTML = person.name 

const person = {
    name: "Josie Newman", 
    quote: "Live slow, die whenever", 
    skills: ["HTML", "CSS", "JS"] 
}

const name = document.querySelector("#name");
const quote = document.querySelector("#quote");
const skillContainer = document.querySelector(".skills");
const skills = document.querySelectorAll(".skills");
const skillsList = document.querySelector(".skillslist");


name.innerHTML = person.name;
quote.innerHTML = person.quote;

skills.forEach((skill,index) => {
    skill.innerHTML = person.skills[index];
})

