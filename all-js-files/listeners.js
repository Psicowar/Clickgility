playBtn.addEventListener("click", checkValueInputName);
startBtn.addEventListener("click", startEasyGame);
hardGameBtn.addEventListener("click", startHardGame);
finishBtn.addEventListener("click", showInitialPage);
clicksEasyGame.addEventListener("click", clickEasy);
clickHardGame.addEventListener("click", clickHard);
goToFinishPage.addEventListener("click", showFinishPage)
randomMoveBttn.addEventListener("click", randomMove)
playBtn.addEventListener("click", function (event) {
    event.preventDefault();
});


let threeSec = 3;
let tenSec = 10;
let userNameValue = "";

let user;
console.log(JSON.parse(localStorage.getItem("users")))
let userArray = (JSON.parse(localStorage.getItem("users")) === null)? []:JSON.parse(localStorage.getItem("users"));
console.log(userArray);

function showEasyPage() {
    initialPage.classList = ("hidden-section section-styles");
    playSectionEasy.classList = ("section-styles");
    mainGameSectionEasy.classList = ("play-page-section");
    
}

// shows 3s timer when clicking start and hides main-game-section
function checkValueInputName() {
    if (userNameBtn.value !== "") {
        showEasyPage()
    }else {
        alert("Enter a user name!!!")
    }
}


function startEasyGame() {
    mainGameSectionEasy.classList = ("play-page-style hidden-section");
    timer3s.classList = ("play-page-style");
    userNameValue = userNameBtn.value;
    countdown3s();
    
    //timeout 3 s
    setTimeout(() => {
        timer3s.classList = ("play-page-style hidden-section");
        clicksEasyGame.classList = ("play-page-style");
        clickArea.classList = ("clickon");
         //timeout 10 sec
         setTimeout(() => {
            goToHardPage.classList = ("play-page-style");
            clicksEasyGame.classList = ("play-page-style hidden-section");
            easyHiddenMessage.classList = ("congratulations-message");
            easyGameScore.textContent += countClickEasy + " clicks!!";
            hardGameBtn.classList = ("hard-button");
            clickArea.classList = ("hidden-button clickon");
         }, 10000);
     }, 3000);
     
     //end easy mode
}   

function randomMove() {
    const height = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;
    let positionY = Math.floor((Math.random() * height/2) -350);
    let positionX = Math.floor((Math.random() * width/2) -800);
    randomMoveBttn.style.transform = `translate(${positionX}px, ${positionY}px)`;
    console.log(positionX, positionY);
    
}


function startHardGame() {
    clicksEasyGame.classList = ("play-page-style hidden-section");
    playSectionHard.classList = ("section-styles");
    goToHardPage.classList = ("play-page-style hidden-section");
    easyHiddenMessage.classList = ("congratulations-message hidden-message");
    timer3sHard.classList = ("play-page-style");
    playSectionEasy.classList = ("section-styles hidden-section");
    playSectionHard.classList = ("section-styles");
    clickArea.classList = ("clickon");
    countdown3s();
    
    setTimeout(() => {
        clickHardGame.classList = ("play-page-style");
         //timeout 10 sec
        setTimeout(() => {
            goToHardPage.classList = ("play-page-style");
            clickHardGame.classList = ("play-page-style hidden-section");
            easyHiddenMessage.classList = ("congratulations-message");
            hardHiddenMessage.classList = ("congratulations-message");
            hardGameScore.textContent += countClickHard + " clicks!!";
            scoreSection.classList = ("play-page-style");
            goToFinishPage.classList = ("go-finish-page ");
            clickArea.classList = ("hidden-button clickon");
            randomMoveBttn.style = "";

        }, 10000);
     }, 3000);
}

function showFinishPage() {
    hardHiddenMessage.classList = ("congratulations-message hidden-message");
    finishBtn.classList = ("go-to-initial");
    playSectionHard.classList = ("section-styles hidden-section");
    scoreSection.classList = ("play-page-style hidden-button");
    finishPage.classList = ("section-styles");
    finalUserScore.textContent = (`${userNameValue}, EASY Game: ${countClickEasy} clicks, HARD Game: ${countClickHard} clicks`);
    user = new userScore(userNameValue, countClickEasy, countClickHard);
    userArray.push(user);
    saveUserScore();
}

function showInitialPage() {
    timer3sHard.classList = ("play-page-style hidden-section");
    initialPage.classList = ("section-styles");
    finishPage.classList = ("section-styles hidden-section");
    userNameBtn.value = "";
    hardGameBtn.classList = ("hidden-button");
    easyHiddenMessage.classList = ("congratulations-message hidden-message")
    countClickEasy = 0;
    easyGameScore.textContent = ("Your score is: ");
    countClickHard = 0;
    hardGameScore.textContent = ("Your score is: ");
    updateLog();
} 

function saveUserScore() {
    let userArrayJson = JSON.stringify(userArray);
    localStorage.setItem("users", userArrayJson);    
} 


let userLog = JSON.parse(localStorage.getItem("users"))===null?[]:JSON.parse(localStorage.getItem("users"));
    
let easyClickArraySorted = [...userLog].sort((a, b) => (b.clicksEasy - a.clicksEasy));
console.log(easyClickArraySorted);

console.log(easyClickArraySorted.length);

let hardClickArraySorted = [...userLog].sort((a, b) => (b.clicksHard - a.clicksHard));
console.log(hardClickArraySorted);

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


function updateLog(){
    
    let userLog = JSON.parse(localStorage.getItem("users"));
    
    let easyClickArraySorted = [...userLog].sort((a, b) => (b.clicksEasy - a.clicksEasy));
    console.log(easyClickArraySorted)

    console.log(easyClickArraySorted.length)
    
    let hardClickArraySorted = [...userLog].sort((a, b) => (b.clicksHard - a.clicksHard));
    console.log(hardClickArraySorted)
    
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
    
}  



function countdown3s () {

    if (threeSec == 0){
        timer3s.classList = ("play-page-style hidden-section");
        timer3sHard.classList = ("play-page-style hidden-section");
        threeSec = 3;
        countdownHard.textContent = "";
        return;
    } else {
        countdown3.textContent = threeSec;
        countdownHard.textContent = threeSec;
        setTimeout(() => {
            threeSec--;
            countdown3s();
        }, 1000);
    }

}


