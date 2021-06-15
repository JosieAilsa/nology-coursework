function calculateYearsUntilRetirement (event) {
    const currentAge = event.target.value;

    //Start your code here: 
    const yearsLeft = 65 - currentAge;
    alert(`You have ${yearsLeft} years left until retirement`)
}

function getGreetingInFrench (event) {
    const greeting = event.target.value;

    if (greeting == "hello") {
        alert("Bonjour");
    } else if (greeting == "goodbye") {
        alert("au reviour");
    } else alert ("not recognised");
}

function getAmountKilometers (event){
    const miles = event.target.value;

    const kilometers = (Math.ceil(miles * 1.609344));
    alert (`Gives you ${kilometers} kilometers`);
}