// const fruitObjectArray = [

//     { fruit: "apple"},
//     { fruit: "banana"},
//     { fruit: "orange"}

// ];
// ///How would we log banana to the console. 
// //To accces it would be array[index].key
// // console.log(fruitObjectArray[1].fruit);
// // console.log(fruitObjectArray[2].fruit);


// //  If we wanted to iterate over our array --> array of values
// //Going to iterate over using map which will give a new array
// const fruitValueArray = fruitObjectArray.map((fruitObject) => {
//     //when iterating over the array we have access to each object
//     //So declare a const  
//     //Use .fruit to use the key to access the value
//     const fruitValue = fruitObject.fruit;
//     return  fruitValue;
// });

// // console.log(fruitValueArray);

// const searchTerm = "apple";

// const matchingFruitArray = fruitObjectArray.filter((fruitObject) => {
//     //See if the fruit object matched the seacrh term 
//     //Go into the fruit object, find the value 
//     //Use the method of includes which returs a true or false 
//     const fruitMatch = fruitObject.fruit.includes(searchTerm);
//     //This will give a boolean which is what fruitMatch
//     //All we need to do is then return the fruit match 
//     return fruitMatch;
// })

// // console.log(matchingFruitArray);

// //Create a function that takes an array of fruit 
// // -> Map over the array and generate some <li>FRUIT</li>
// //-> Take the array and return a string 

// const fruitListHTML = (fruitObjectArray) => {
//     //Map over to add the LI tags 
//     //Saving it in a variable 
//     let htmlFruitArray = fruitObjectArray.map((fruitObject) => {
//     return `<li>${fruitObject.fruit}</li>`;
// })
// //This creates an array because map is being used 
// //Innerhtml only accepts a sting so we need to join it 
// //To do this without the , add the ""
//     htmlFruitArray = htmlFruitArray.join("")
// return  htmlFruitArray;
// }

// console.log(fruitListHTML(fruitObjectArray))

const fruitObjectArray = [
        { fruit: "apple", rating: 8, price:  150},
        { fruit: "banana", rating: 5, price:  100},
        { fruit: "orange", rating: 6, price:  120}
];

console.log(fruitObjectArray[2].rating)


//See if you can change the price of p to £ 
//Then capitalise the name

const fruitListHTML = (fruitObjectArray) => {
    fruitObjectArray.map((item) => {
        //Gte the price of every item /100 and add two decimal points to make it £
    const price  = (item.price/100).toFixed(2);
    // Then add the £ 
    item.price = `£${price}`
        //Get the current fruit item and capitalise the first letter 
        //Then join it together with the rest of the sting 
    const capitalised = item.fruit[0].toUpperCase() + item.fruit.slice(1);
        item.fruit = capitalised;
        });
        //Then sort the array so that it compares the ratings 
        fruitObjectArray.sort(function (a, b) {
            return  b.rating - a.rating ;
        })
        let cardHtmlFruitArray = fruitObjectArray.map((fruitObject) => {
        //Create a card with multiple details on it: 
        //We access the keys in that object to get the values 
        const cardHtml = `
        <div>
            <h3>${fruitObject.fruit}</h3>
            <p>This fruit is ${fruitObject.rating}/10 </p>
            <p>Buy now for ${fruitObject.price}</p> 
        </div>`
        //This now returns and array with these three seperate strings 
        return cardHtml;
    })
    //Then return the array joined together 
    return cardHtmlFruitArray.join("");
};

// console.log(fruitListHTML(fruitObjectArray));

//See if you can change the price of p to £ 
//Then capitalise the name

console.log(fruitListHTML(fruitObjectArray));


///Sort the objects by rating so you have the highest first: 


 
