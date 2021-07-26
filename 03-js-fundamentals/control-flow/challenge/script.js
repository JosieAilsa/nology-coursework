function handleCalculateOddEven (event) {
    const num = event.target.value;

    if ( num % 2 == 0) {
        alert("Even Number");
    }else{
        alert("Odd Number");
    }
}


function handleCalculateGreatestNumber (event) {
    const oneTwoThree = event.target.value;

    let greatest;

    switch (oneTwoThree) {
        case "1":
        greatest = "the lowest number"
        break;
        case "2":
        greatest = "the median number"
        break;
        case "3":
        greatest = "the highest number"
        break;
        default:
        greatest = "not 1, 2 or 3"
        break;
    }
    alert (`This is ${greatest}!`)
}

function handleWeekdayCountdown (event){
    let day = event.target.value;
// Make all the same case 
    day = day.toLowerCase();
// Remove white space
    day = day.replace(/\s+/g, '');

    let daysleft;

    switch (day) {
        case "monday":
        daysleft = "5 days left!"
        break;
        case "tuesday":
        daysleft = "4 days left!"
        break;
        case "wednesday":
        daysleft = "3 days left!"
        break;
        case "thursday":
        daysleft = "2 days left!"
        break;
        case "friday":
        daysleft = "1 day left!"
        break;
        case "saturday":
        daysleft = "Enjoy the weekend! 7 days left until the next"
        break;
        case "sunday":
        daysleft = "Enjoy the weekend! 6 days left until the next"
        break;
        default:
        daysleft = "That is not a day"
        break;
}
alert (daysleft)
}

function handleVegetablePrices (event) {
    let veg = event.target.value;
    
    veg = veg.toLowerCase();
    veg = veg.replace(/\s+/g, '');

    let vegCost;

    switch (veg){
        case "potato":
        case "carrot":
        vegCost = "£1.29"
        break; 
        case "broccoli":
        vegCost = "£0.98"
        break; 
        case "cabbage":
        vegCost = "£1.10"
        break; 
        case "asparagus":
        vegCost = "£1.79"
        break; 
        default:
        vegCost = "not avaliable"
        break;
    }
    alert (`The vegtable is ${vegCost} per kg.`)
    }