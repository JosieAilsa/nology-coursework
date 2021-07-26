// // Challenge 

// //1. Write the function to find a perimeter of a rectange 

// function findRectanglePermimeter (rectangleHeight,rectangleWidth ) {
//     return rectanglePermieter = (rectangleHeight*2)+(rectangleWidth*2)
//     };
   
//     console.log(findRectanglePermimeter (10,5));

// // const rectanglePermieter = (rectangleWidth, rectangleHeight) => {
// //      return (rectangleHeight*2)+(rectangleWidth*2)
// //      }
// //      console.log(rectanglePermieter(10,5));

// // Write a function to find the area of cricle 

// const calculateAreaCircle = (radius) => {
// const circleArea = (Math.PI * (radius * radius))
// return(circleArea)
// };

// console.log(calculateAreaCircle(2));

// //Now find the circumference of a circle 

// const calculateCircumferenceCircle = (radius) => {
//     const circumference  = ((Math.PI * radius) * 2);
//     return(circumference)
//     };
// console.log(calculateAreaCircle(4));


// //Write a function getDescription
// //That takes 4 parameters number of children, partner's name, geographic location and job title 
// //Outputs your statement to the console I am a x living in x... 
// //Call that function 3 times with different parameters 

// const getDescription = (amountOfChildren, partnerName, location, jobTitle) => {
// let message =(`I am a ${jobTitle} livining in ${location}. My partner ${partnerName} and I have ${amountOfChildren} children together.`);
// console.log(message)
// }

// getDescription(2, "Tom", "Bristol", "Comms Exec");
// getDescription(4, "Ellie", "Shrewsbury", "UI developer");
// getDescription(0, "Kyle", "Dundee", "Project Manager");

// //Lifetime suppl y of snickers 

// //Write a function called calculateSupply; 
// //Needs t take two arguemnts: age, amount per day. 
// // Calculates the amount consumed for the rest of your life (based on constant max age)
// //Calculates the amount consumed for your lide (based on a const max age)
// //outputs the result to the screen like " you will need X to last you nuntil the ripe old age of X"
// //Call that function three times with three diferent values; 
// //Bonus accept a floating point for a number and round the result to roound number.

// const calculateSupply  = (age, amountPerDay) => {
//     let maxAge = 90; 
//     let daysLeft = (maxAge - age)* 365;
//     let totalSnickers = Math.ceil(daysLeft * amountPerDay) 
//     let message = (`You will need at least ${totalSnickers} Snickers to last you everyday to the ripe of age of ${maxAge}.`)
//     console.log(message)
// }

// calculateSupply(28, 4);
// calculateSupply(28, 2.5);
// calculateSupply(51, 0.659898);

// //The temperature converter, that converts celsius to faranheight 

// const calculateFarenheight = (tempCelcius) => {
//     const faranheight = (tempCelcius*9)/ 5 + 32;
//     console.log(`${tempCelcius} celsuius gives ${faranheight} faranheight.`)
// }

// calculateFarenheight(15);

// //The puppy Age calculator, you know how old your dog is in human years but what about dog years 

// const calculateDogYears = (yearsOld) => {
//     const dogYears = (yearsOld * 7)
//     console.log(`Your dog is ${dogYears} dog years old`)
// }

// calculateDogYears(11);
// calculateDogYears(3);


const getGrade = (score) => {
    switch (true) {
    case (score >= 80):
    grade =  "A"
    break;
    case (score >= 70):
    grade =  "B"
    break;
    case (score >= 60):
    grade =  "C"
    break;
    case (score >= 50):
    grade =  "D"
    break;
    case (score >= 40):
    grade =  "E"
    break;
    case (score >= 0):
    grade =  "F"
    break;
    default:
    grade = "Score unavailable"
    break;
    }
    return grade;
  };
console.log(getGrade(85));


const calculateAreaOfCirlce = (radius) => {
  const circleArea = Math.PI*(radius*radius);
  return circleArea.toFixed(2);
};
  
console.log(calculateAreaOfCirlce(3));


const getStudentSummary = (score, name) => {
  const letterGrade = getGrade(score);

  switch (letterGrade) {
    case "A":
      return `Congratulations ${name}! You achieved a grade of ${letterGrade}.`;
    case "B":
      return `Well done ${name}! You achieved a grade of ${letterGrade}.`;
    case "C":
      return `Nicely done ${name}! You achieved a grade of ${letterGrade}.`;
    case "D":
      return `That's okay ${name}. You achieved a grade of ${letterGrade}.`;
    case "E":
      return `Too bad ${name}. You achieved a grade of ${letterGrade}.`;
    case "F":
      return `Sorry ${name}. You achieved a grade of ${letterGrade}. There's always next year.`;
    default:
      return `My apologies ${name}, there's been an error in processing your grade.`;
  }
};

getStudentSummary(80,John);








