const validMessage = {
    userName: "Charlie",
    content: "Have a nice day!", 
};

const invalidMessage = {
    userName: "Charlie",
    error: 487598759857,

};


// for (let key in message) {
//     console.log(key)
//     console.log(message[key])
// };

//Create a function that loops through the message object: 
// Check all of the values are strings. 
//You wil return true if they are and false if otherwise. 

// let checkIfStrings = () => {
// let valuesArray = Object.values(message)
// valuesArray.forEach(value => {
//     if (typeof value === "string") {
//         return console.log(true);
//     } else {
//         return console.log(false);
//     }
// });
// };


// //Declare a function that takes an object as a param
// const validateMessageObject = (messageObject) => {
//     //Declare a for in loop to loop through the object 
//     for (let key in messageObject) {
//         //Declare a truthy statement that will evaulate to true when condiitions are met;
//         const typeCheck = typeof messageObject[key] !== "string";
//         /// If typcheck is true breakout of the function and return false
//         if (typeCheck) {
//             //Exit out of the function and return false 
//             return false
//         }
//     }
//     //Otherwise come out of the for loop and return truie 
//     return true; 
// }

// console.log(validateMessageObject(invalidMessage));

// const validMessageValues = Object.values(validMessage);
// const invalidMessageValues = Object.values(invalidMessage);


// console.log(
//     validMessageValues.every((validMessage) => {
//     const typeCheck = typeof validMessage === "string";
//     return typeCheck;
//     })
// );

// console.log(
//     invalidMessageValues.every((invalidMessage) => {
//     const typeCheck = typeof invalidMessage === "string";
//     return typeCheck;
//     })
// );

const validMessageKeys = Object.keys(validMessage);
const invalidMessageKeys = Object.keys(invalidMessage);

// console.log(validMessageKeys);
// console.log(invalidMessageKeys);

///Write a function that will check the keys of a message object 
//valid keys are [username,content]
//Check the keys of the object are both the same and return true for valie or false for invalid.. 

// let checkValidKeys = (array1,array2) => {
//   for (let i = 0; i < array1.length; i ++ ){
//     if (array1[i] !== array2[i]) {
//         console.log(false); 
//     }
//     else {
//         console.log(true);
//     }
//     }
// };

// // checkValidKeys(validMessageKeys,invalidMessageKeys);

// const validateMessageKeys = (messageObject) => {
//     //First, get the keys 
//     const objectKeys = Object.keys(messageObject);
//     //Check if they are valid using .every() that gives a true or false for each key
//     const keyCheck = objectKeys.every((key) => {
//         // Declares the valid keys: 
//         const validKeys = ["userName", "content"];
//         //Go through the keys array and check the valid keys are included
//         //This will return true if included false if not 
//         return validKeys.includes(key);
//     })

//     //Return this check 
//     return keyCheck;
// }

// console.log(validateMessageKeys(validMessage));
// console.log(validateMessageKeys(invalidMessage));


const validMessageEntries = Object.entries(validMessage);
const invalidMessageEntries = Object.entries(invalidMessage);

console.log(validMessageEntries);
console.log(invalidMessageEntries);

const validateMessage = (messageObject) => {
    //Check entries, so we can loop over checking both items 
const objectEntries = Object.entries(messageObject);
const validation = objectEntries.every((entry) => {
    //We know that each entry is an array 
    //So that means it has an index
    //We know the key is 1st item, and the value the 2nd
    //That means we know the key index is...
    const key = entry[0];
    //So the value is ...
    const value = entry[1];
    //So we check the type of the value is a string 
    const typeCheck = typeof value === "string";
    //Now we want to check the valid keys 
    //Declare the valid key array 
    const validKeys = ["userName", "content"];
    // Check thats these valid keys are included in the current object keys
    const keyCheck  = validKeys.includes(key);
    //So we want both check to return true so we return it like this 
    return typeCheck && keyCheck;
});
//Finally return the validation function 
return validation;
}

console.log(validateMessage(validMessage));
console.log(validateMessage(invalidMessage));