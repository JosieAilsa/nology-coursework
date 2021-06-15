function handleCalculateGrade (event) {
    let grade = event.target.value;

    if (!grade) {
       return;
    }
    //OR you could put if (grade == undefined) return;
    
    //Stop lowercase tricking our code
    grade = grade.toUpperCase();

    let percentage;
    switch (grade){
        case "A":
            percentage = "90-100%"
            break;
        case "B":
            percentage = "75%-90%"
            break;
        case "C":
            percentage = "50-75%"
            break;
        case "D":
            percentage = "25-50%"
            break;
        case "E":
            percentage = "0-25%"
            break;
        default:
            percentage =  "not calculated as no grade was added!"
            break;
    }
alert ("The percentage was " + percentage);
}