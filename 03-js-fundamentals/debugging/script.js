let currentHeadline = "News in the world today"
const currentArticle = "Enim excepteur elit anim ex amet ea laborum est nisi duis non eu.In aliqua nulla ex quis amet dolor. Voluptate dolor consectetur in nisi do elit. Laboris pariatur est aliqua non. Ex nulla ullamco consequat exercitation labore laboris. Magna nostrud cupidatat ipsum adipisicing consectetur. Eiusmod ut duis eiusmod elit nulla enim. Pariatur nostrud est minim anim elit eu ea velit sit et aliqua quis exercitation nostrud. Esse commodo commodo consequat in labore elit anim elit duis culpa. Lorem enim deserunt aute exercitation elit nostrud commodo. In esse adipisicing consectetur reprehenderit cupidatat consectetur tempor esse. Tempor pariatur occaecat qui exercitation ipsum do id laboris reprehenderit dolore et laboris ea aliquip."

const isFakeNews= false; 
const amountOfWords = 921;

if (currentHeadline.length > 15){
    currentHeadline = currentHeadline.substring(0,15) +"..."
}

console.log("Nology Post 2021");
console.log(`Headline ${currentHeadline}`)
console.log(`Article: ${currentArticle}`)


//Client brief make an app which keeps the score of a football match 

//It's two teams so creat two scores

let teamScoreOne = 0;
let teamScoreTwo = 0;
let isGameStopped = false;

//When team one button is clicked add 1 score to team 1  (if an event should use handle)

function handleTeamOneClick (event) {
    teamScoreOne = teamScoreOne + 1;
    console.log (teamScoreOne);
}
//When team two button is clicked add 1 score to team 2 (if an event should use handle)

function handleTeamTwoClick (event) {

teamScoreTwo = teamScoreTwo + 1;
console.log (teamScoreTwo);

}
 
//When do we finish and stop (if an event should use handle)
function handleStopeGame (event) {
    let isGameStopped = true;
}

