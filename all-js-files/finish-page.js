function score(userName, numClicksEasy, numClicksHard) {
    this.userName = userName
    this.numClicksEasy = numClicksEasy
    this.numClicksHard = numClicksHard
};

function showFinishPage() {
    hardHiddenMessage.classList = ("congratulations-message hidden-message");
    finishBtn.classList = ("go-to-initial");
    playSectionHard.classList = ("section-styles hidden-section");
    scoreSection.classList = ("play-page-style hidden-button");
    finishPage.classList = ("section-styles");
    finalUserScore.textContent = (`${userNameValue}, EASY Game: ${countClickEasy} clicks and HARD Game: ${countClickHard} clicks.`);
    user = new userScore(userNameValue, countClickEasy, countClickHard);
    userArray.push(user);
    saveUserScore();
}


function saveUserScore() {
    let userArrayJson = JSON.stringify(userArray);
    localStorage.setItem("users", userArrayJson);    
} 


let userLog = JSON.parse(localStorage.getItem("users"))===null?[]:JSON.parse(localStorage.getItem("users"));
let easyClickArraySorted = [...userLog].sort((a, b) => (b.clicksEasy - a.clicksEasy));
let hardClickArraySorted = [...userLog].sort((a, b) => (b.clicksHard - a.clicksHard));

let userArray = (JSON.parse(localStorage.getItem("users")) === null)? []:JSON.parse(localStorage.getItem("users"));


if (easyClickArraySorted.length === 1){

    firstNameEasy.textContent = easyClickArraySorted[0].userName;
    firstScoreEasy.textContent = easyClickArraySorted[0].clicksEasy;

    firstNameHard.textContent = hardClickArraySorted[0].userName;
    firstScoreHard.textContent = hardClickArraySorted[0].clicksHard;

} else if(easyClickArraySorted.length === 2){

    firstNameEasy.textContent = easyClickArraySorted[0].userName;
    secondNameEasy.textContent = easyClickArraySorted[1].userName;

    firstScoreEasy.textContent = easyClickArraySorted[0].clicksEasy;
    secondScoreEasy.textContent = easyClickArraySorted[1].clicksEasy;

       
    firstNameHard.textContent = hardClickArraySorted[0].userName;
    secondNameHard.textContent = hardClickArraySorted[1].userName;

    firstScoreHard.textContent = hardClickArraySorted[0].clicksHard;
    secondScoreHard.textContent = hardClickArraySorted[1].clicksHard;

} else if (easyClickArraySorted.length === 3){

    firstNameEasy.textContent = easyClickArraySorted[0].userName;
    secondNameEasy.textContent = easyClickArraySorted[1].userName;
    thirdNameEasy.textContent = easyClickArraySorted[2].userName;
    
    firstScoreEasy.textContent = easyClickArraySorted[0].clicksEasy;
    secondScoreEasy.textContent = easyClickArraySorted[1].clicksEasy;
    thirdScoreEasy.textContent = easyClickArraySorted[2].clicksEasy;
    
            
    firstNameHard.textContent = hardClickArraySorted[0].userName;
    secondNameHard.textContent = hardClickArraySorted[1].userName;
    thirdNameHard.textContent = hardClickArraySorted[2].userName;
    
    firstScoreHard.textContent = hardClickArraySorted[0].clicksHard;
    secondScoreHard.textContent = hardClickArraySorted[1].clicksHard;
    thirdScoreHard.textContent = hardClickArraySorted[2].clicksHard;

} else if (easyClickArraySorted.length === 4){

    firstNameEasy.textContent = easyClickArraySorted[0].userName;
    secondNameEasy.textContent = easyClickArraySorted[1].userName;
    thirdNameEasy.textContent = easyClickArraySorted[2].userName;
    fourthNameEasy.textContent = easyClickArraySorted[3].userName;

    
    firstScoreEasy.textContent = easyClickArraySorted[0].clicksEasy;
    secondScoreEasy.textContent = easyClickArraySorted[1].clicksEasy;
    thirdScoreEasy.textContent = easyClickArraySorted[2].clicksEasy;
    fourthScoreEasy.textContent = easyClickArraySorted[3].clicksEasy;
    
            
    firstNameHard.textContent = hardClickArraySorted[0].userName;
    secondNameHard.textContent = hardClickArraySorted[1].userName;
    thirdNameHard.textContent = hardClickArraySorted[2].userName;
    fourthNameHard.textContent = hardClickArraySorted[3].userName;
    
    firstScoreHard.textContent = hardClickArraySorted[0].clicksHard;
    secondScoreHard.textContent = hardClickArraySorted[1].clicksHard;
    thirdScoreHard.textContent = hardClickArraySorted[2].clicksHard;
    fourthScoreHard.textContent = hardClickArraySorted[3].clicksHard;

} else if (easyClickArraySorted.length > 4){
    
    firstNameEasy.textContent = easyClickArraySorted[0].userName;
    secondNameEasy.textContent = easyClickArraySorted[1].userName;
    thirdNameEasy.textContent = easyClickArraySorted[2].userName;
    fourthNameEasy.textContent = easyClickArraySorted[3].userName;
    fifthNameEasy.textContent = easyClickArraySorted[4].userName;

    
    firstScoreEasy.textContent = easyClickArraySorted[0].clicksEasy;
    secondScoreEasy.textContent = easyClickArraySorted[1].clicksEasy;
    thirdScoreEasy.textContent = easyClickArraySorted[2].clicksEasy;
    fourthScoreEasy.textContent = easyClickArraySorted[3].clicksEasy;
    fifthScoreEasy.textContent = easyClickArraySorted[4].clicksEasy;
    
            
    firstNameHard.textContent = hardClickArraySorted[0].userName;
    secondNameHard.textContent = hardClickArraySorted[1].userName;
    thirdNameHard.textContent = hardClickArraySorted[2].userName;
    fourthNameHard.textContent = hardClickArraySorted[3].userName;
    fifthNameHard.textContent = hardClickArraySorted[4].userName;
    
    firstScoreHard.textContent = hardClickArraySorted[0].clicksHard;
    secondScoreHard.textContent = hardClickArraySorted[1].clicksHard;
    thirdScoreHard.textContent = hardClickArraySorted[2].clicksHard;
    fourthScoreHard.textContent = hardClickArraySorted[3].clicksHard;
    fifthScoreHard.textContent = hardClickArraySorted[4].clicksHard;
}