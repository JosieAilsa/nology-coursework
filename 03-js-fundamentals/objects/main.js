// const person = {
//     firstName: "Charlie",
//     lastName:"Richardson",
//     quote:"It doesn't get easier, you just get faster",
//     skills: ["HTML", "CSS", "JavaScript"],
//     imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
//     getFullName () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     getSkillsList () {
//         const skillsHTML = this.skills.map(skill => `<li>${skill}<li>`);
//         console.log(skillsHTML)
//         return skillsHTML.join("");
//     },
//     getStudentContainerHtml () {
//         let htmlString = `<article class = "student-card">
//         <img src = ${this.imgURL}>
//         <h2> ${this.getFullName()})</h2>
//         <block>${this.quote}</block>
//         <h3>Skills</h3>
//         <ul> ${this.getSkillsList()}</ul>
//     </article>`   
//     return htmlString;
//     }

// }

// class Profile  {
//     constructor(firstName, lastName, quote, skills, imgUrl) {
//         this.firstName = firstName, 
//         this.lastName = lastName,
//         this.quote = quote, 
//         this.skills = skills,
//         this.imgUrl = imgUrl;
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     getSkillsList() {
//         const skillsHTML = this.skills.map(skill => `<li>${skill}<li>`);
//         console.log(skillsHTML)
//         return skillsHTML.join("");
//     }
//     getProfile() {
//         let proflileHTML = `<article class = "student-card">
//         <img src = ${this.imgURL}>
//         <h2> ${this.getFullName()})</h2>
//         <block>${this.quote}</block>
//         <h3>Skills</h3>
//         <ul> ${this.getSkillsList()}</ul>
//     </article>`   
//     return proflileHTML;
//     };

// }
// // const studentContainer = document.querySelector(".students-container");
// // console.log(person.getSkillsList());
// // for (let index = 0; index <10; index ++) {
// // studentContainer.innerHTML += person.getStudentContainerHtml();
// // }


// // let customer = {
// //     fullName: "Barry Chuckle",
// // }

// // let getName = customer.fullName
// //     .split(" ");
// //   let firstName = getName[0];
// //   let lastName = getName[1];
// //   customer.firstName = firstName;
// //   customer.lastName  = lastName;
// //   console.log(customer);


// ////Class syntax: 

// //PascalCase -> naming convention for classes
// class ExampleClass {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName, 
//         this.lastName = lastName,
//         this.age = age;
//     }
//     greet() {
//         return `hi my name is ${this.firstName} ${this.lastName}`
//     }
// }

// // class ExtendedClass extends ExampleClass {
// //     constructor(firstName, lastName, age, subject) {
// //         super(firstName, lastName, age), 
// //         this.subject = subject;
// //     }
// //     greet() {
// //         return `Hi I am ${this.firstName} ${this.lastName} and I teach ${this.subject}`
// //     }
// // }

// // console.log(new ExtendedClass ("Charlie", "Richardson", 30, "javascript").greet())


// const exampleOne = new ExampleClass("Josie", "Newman", 26);
// const exampelTwo = new ExampleClass("John", "Doe", 27 );
// // console.log(exampleOne);
// // console.log(exampleOne.greet())
// // console.log(exampelTwo)
// // onsole.log(exampelTwo.greet())

// const studentContainer = document.querySelector(".students-container")

// class PremiumProfile extends Profile {
//     constructor(firstName, lastName, quote, skills, imgUrl, contactLink){
//         super(firstName, lastName, quote, skills, imgUrl),
//         this.contactLink = contactLink
//     }
//     getProfile() {
//         let proflileHTML = `<article class = "student-card">
//         <img src = ${this.imgURL}>
//         <h2> ${this.getFullName()})</h2>
//         <block>${this.quote}</block>
//         <h3>Skills</h3>
//         <ul> ${this.getSkillsList()}</ul>
//         <a href = ${this.contactLink}>Let's get in touch</a> 

//     </article>`   
//     return proflileHTML;
//     };

// }

// let josie = new PremiumProfile (
//     "Josie",
//      "Newman", 
//      "If you don't love it you're going to fail",
//      ["Developer", "Designer", "Writer"],
//      "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
//      "https://developer.mozilla.org/en-US/"
//      );
// // console.log(josie)
// // console.log(josie.getProfile())

// let charlie = new Profile (
//     "Charlie",
//     "Richardson",
//     "It doesn't get easier, you just get faster",
//     ["HTML", "CSS", "JavaScript"],
//      "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
//      );

// let jane = new Profile (
//         "Jane",
//         "Doe",
//         "It doesn't get easier, you just get faster",
//         ["HTML", "CSS", "JavaScript"],
//          "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
//          "https://developer.mozilla.org/en-US/"
//          );
    
// studentContainer.innerHTML += josie.getProfile() + jane.getProfile() + charlie.getProfile();
class Engine {
  constructor() {
    let engineIsRunning = false;
    this.engineIsRunning = engineIsRunning;
  }
  /**
   * Updates engineIsRunning to true and returns a conditonal string based if the engine is already running.
   */
  startEngine() {
        let message = "";
        if (this.engineIsRunning === true ) {
        message = "Engine is already running";
        return message;
        } else if (this.engineIsRunning === false ){
        this.engineIsRunning = true;
        message = "Engine has started running"
        }
    return message;
    }

  stopEngine () {
    let message = "";
    if (this.engineIsRunning === true) {
      this.engineIsRunning = false;
      message = "Engine has stopped running";
    } else if (this.engineIsRunning === false){
      message = "Engine has already stopped running";
    }
    return message; 
    }

}

const enguine = new Engine ();

console.log(enguine.startEngine())
