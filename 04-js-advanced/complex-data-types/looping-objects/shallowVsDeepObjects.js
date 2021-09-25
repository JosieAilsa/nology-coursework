
//Shallow 
const simpleArray = [
    1,2,3 
]
const simpleObject = { key: "value" }

//Create the shallow copies

const shallowArrayCopy = simpleArray;
const shallowObjectCopy = simpleObject;

//Interact with the original values 

// simpleArray.push(4);
// simpleObject.newKey = "newValue";

// //Return the value of the copies 

// console.log(shallowArrayCopy, shallowObjectCopy);

//Deep copies 
//Methods are [...] spread operator 

const deepArrayCopy = [...simpleArray];
const deepObjectCopy = {...simpleObject};

///Interact with the original values: 
simpleArray.push(4);
simpleObject.newKey = "newValue";

// console.log(simpleArray, deepArrayCopy);
// console.log(simpleObject, deepObjectCopy)

//Nested objects 
//Declare two complex variables 
const complexArray = [
    [1], [2], [3]
];
const complexObject = {
    data: {
        key: "value", 
    }
}
//Make copies of them using the spread operator 
const complexArrayCopy = complexArray.map((array) => [...array]);
const complexObjectCopy = {...complexObject, data : {...complexObject.data}};

//Interact with the complex variables 
// complexArray[0].push(2); //Add a 2 to the first value 
// complexObject.data.newKey = "new value";

// //Return the values 
// console.log(complexArrayCopy); 
// console.log(complexObjectCopy); 

//JSON Object 

const JSONObject = JSON.stringify(complexObject);
console.log(JSONObject);

complexObject.data.newKey = "new value";

const parsedJSON = JSON.parse(JSONObject);
console.log(parsedJSON)

//Lodash 