

  //getFullName
const getUpperCaseFullName = (firstName,lastName) => `${firstName.toUpperCase()} ${lastName.toUpperCase()}`


    
const getMilisecondsTillbirthDate = (birthday) => {
    const birthDate = new Date(birthday);
    const todaysDate  = new Date(); // 
    const differenceInMS= todaysDate.getTime() - birthDate.getTime();
    const MSInDay = 1000 * 60 * 60 * 24;
    const numberOfDaysSinceBirth = Math.floor(differenceInMS / MSInDay);
    return `${numberOfDaysSinceBirth} since birth`;

}


const sortHeadlineArrayArray = (headlineArr) => {
let filteredHeadlineArr = headlineArr.filter((headline) => headline.toLowerCase().includes("tech"));
  return filteredHeadlineArr;
};

const headlines = [
  "Tech is booming",
  "Covid 19 yada yada yada",
  "Economy due for a resurgance!",
  "You can retrain in tech too!"
    ]

console.log(getUpperCaseFullName("Josie", "Newman"))

console.log(getMilisecondsTillbirthDate("04/16/1995"));

console.log(getMilisecondsTillbirthDate("04/16/1995"));

console.table(sortHeadlineArrayArray(headlines));