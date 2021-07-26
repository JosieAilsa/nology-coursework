// // Names array
// const scores = [8,9,12];

// const highScores = scores.filter((score) => score > 10);

// console.log(highScores);

// let string = " 22 $$He LL--O!%^& "

// const formatString = (string) => {
// let finalStringArr = "[]";
// string = string.replace(/[^a-z]/gi, '') 
// let stringArr = string.split("");
//   for (let i = 0; i <stringArr.length; i++) {
//   let current = stringArr[i];
//   if ((i % 2) !== 0) {
//   current.toUpperCase());
//   }
//   else{
//   current.toLowerCase());
//   };
//   current.push(finalStringArr);
// };
// return finalStringArr;
// };
// console.log(formatString(string));  

// formatString(string);


// let string = " 22 $$He LL--O!%^& "

// const formatString = (string) => {
// string = string.replace(/[^a-z]/gi, '') 
// let stringArr = string.split("");
// let finalStringArr = [];
// for (let i = 0; i< stringArr.length; i ++){
//   let current = stringArr[i];
//   if (i % 2 == 0) {
//     finalStringArr.push(current.toUpperCase());
//   } else {
//     finalStringArr.push(current.toLowerCase());
//   }
// }
//   return finalStringArr;
// };

// console.log(formatString(string));

// let mixedArray = [-1, "disco", "3", 5, "15", 2, 0]

// const fizzBuzz = (mixedArray = []) => {
//  const positiveNumberArray = mixedArray.filter((item) => item > 0 && Number(item));

//  const fizzBuzz = positiveNumberArray.map((number) => {
//    let string = "";

//    if (number % 3 == 0) string += "Fizz";
//    if (number % 5 == 0) string += "Buzz";

//    return string || number.toString();
//  });

//  return fizzBuzz;
// };

// console.log(fizzBuzz(mixedArray));

// let toReverse = "reverse"

// const reverseString = (toReverse) => {
//   let toReverseSplit = toReverse.split("");
//   let reversed = toReverseSplit.reverse();
//   let reversedString = reversed.join('');
//   return reversedString;
// // };

// // console.log(reverseString(toReverse));

// let charcterArr = ["X", "B", "B", "b", "g", "l", "n", "x"]
 
// const sortCharactersAlphabetically = (charcterArr) => {

// let toLowerCaseArr = charcterArr.map(character => character.toLowerCase());

// toLowerCaseArr.sort(function (a, b) {
//     let x = a.toLowerCase(),
//         y = b.toLowerCase();
//     return x == y ? 0 : x > y ? 1 : -1;

// });
  
//   return toLowerCaseArr;
// };

// console.log(sortCharactersAlphabetically(charcterArr));

// let numberArr = [6, 9, 55, 2, 9190, .5, 45]
// let willyoubemy = [4,5,6,7,8,9]

// const sortNumbersHighToLow = (numberArr) => {
// let sortedArr = numberArr.sort((a, b) => {
//     return b - a 
// });

//   return sortedArr;
// };

// console.log(sortNumbersHighToLow (numberArr));


// * A function that takes an array of colours and checks if EVERY colour is a primary colour.
// * The primary colours are ["red", "blue", "yellow"].
// * It will return true if they are ALL primary.
// * It will return false if they are NOT ALL primary.

// let coloursArr = ["yellow", "blue", "red", "red", "yellow"]

// const checkPrimaryColours = (coloursArr) => {
//   // Declare the primary colours array 
//   let primaryArr = ["red", "blue", "yellow"]
//   //Sort them so they are in order 
//     .sort();
//   //Then filter the existing array to get rid of duplicates
// let filteredColoursArr = coloursArr.filter((colour,index) => {
//   return coloursArr.indexOf(colour) === index;
// });
// //Then sort the array so that it's identical to the primaryA
//   filteredColoursArr.sort();
//   if (primaryArr == filteredColoursArr) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkPrimaryColours(coloursArr));

// const stringOne = "racecar";

// const checkStringPalindrome = (stringOne) => {
//   let stringSplit = stringOne.split("")
//   let reversedSplit = stringSplit.reverse();
//   let reversedString = reversedSplit.join("");
//   if (reversedString === stringOne) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkStringPalindrome(stringOne));

let numberArr = [[7, 7, 6], [2, 3, 2], [3]];
//  * @return {number[]} [20, 7, 3]

// const totalNestedScoresArr = (scoresArr) => {
// let finalArr = [];
//   for (let i = 0;i < scoresArr.length; i ++) {
//   let current = scoresArr[i];
//   let subArray = current.reduce((accumulator,current) => {
//   return accumulator + current;
//   }, 0);
//   finalArr.push(subArray);
// };
// return finalArr;
// };

let string = "encrypted";


const encryptString = (toEncrypt) => {
  const encrypted = toEncrypt
    .split("")
    .reduce(
      (total, current, index) => {
        const remainder = index % 3;
        total[remainder].push(current);
        return total;
      },
      [[], [], []]
    )
    .flat()
    .join("");
    
  return encrypted;
};

console.log(encryptString(string));
