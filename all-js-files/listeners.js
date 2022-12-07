playBtn.addEventListener("click", showEasyPage);
startBtn.addEventListener("click", startEasyGame);
hardGameBtn.addEventListener("click", startHardGame);
finishBtn.addEventListener("click", showInitialPage);
clicksEasyGame.addEventListener("click", clickEasy);
clickHardGame.addEventListener("click", clickHard);
// scoreDetailsBtn.addEventListener("click", scoreDetails);
goToFinishPage.addEventListener("click", showFinishPage)
randomMoveBttn.addEventListener("click", randomMove)


let threeSec = 3;
let tenSec = 10;
let userNameValue = "";


// Hides initial page and shows games section



function showEasyPage() {
    initialPage.classList = ("hidden-section section-styles");
    playSectionEasy.classList = ("section-styles");
    mainGameSectionEasy.classList = ("play-page-section");
}




// shows 3s t   imer when clicking start and hides main-game-section

function startEasyGame() {

    mainGameSectionEasy.classList = ("play-page-style hidden-section");
    timer3s.classList = ("play-page-style");
    userNameValue = userNameBtn.value;


    countdown3s();
    
    //timeout 3 s
    setTimeout(() => {
        timer3s.classList = ("play-page-style hidden-section");
        clicksEasyGame.classList = ("play-page-style style-button");
         //timeout 10 sec
         setTimeout(() => {
            goToHardPage.classList = ("play-page-style");
            clicksEasyGame.classList = ("play-page-style hidden-section");
            easyHiddenMessage.classList = ("congratulations-message");
            easyGameScore.textContent += countClickEasy + " clicks!!";
            hardGameBtn.classList = ("style-button hard-button");
         }, 10000);
     }, 3000);
     
     //end easy mode
}   


function randomMove() {
    let positionX = Math.floor(Math.random()*500)+1;
    let positionY = Math.floor(Math.random()*500)+1;
    randomMoveBttn.style.left = positionX + "px";
    randomMoveBttn.style.top = positionY + "px";
}


function startHardGame() {
    
    clicksEasyGame.classList = ("play-page-style hidden-section");
    playSectionHard.classList = ("section-styles");
    goToHardPage.classList = ("play-page-style hidden-section");
    easyHiddenMessage.classList = ("congratulations-message hidden-message");
    timer3sHard.classList = ("play-page-style");
    playSectionEasy.classList = ("section-styles hidden-section");
    playSectionHard.classList = ("section-styles");
    
    countdown3s();

    
    setTimeout(() => {
        clickHardGame.classList = ("play-page-style style-button");
         //timeout 10 sec
        setTimeout(() => {
            goToHardPage.classList = ("play-page-style");
            clickHardGame.classList = ("play-page-style hidden-section");
            easyHiddenMessage.classList = ("congratulations-message");
            hardHiddenMessage.classList = ("congratulations-message");
            hardGameScore.textContent += countClickHard + " clicks!!";
            scoreSection.classList = ("play-page-style");
            goToFinishPage.classList = ("style-button go-finish-page ");
;         }, 10000);
     }, 3000);
    

    //save userScore
}

function showFinishPage() {
    hardHiddenMessage.classList = ("congratulations-message hidden-message");
    finishBtn.classList = ("style-button go-to-initial");
    playSectionHard.classList = ("section-styles hidden-section");
    scoreSection.classList = ("play-page-style hidden-button");
    finishPage.classList = ("section-styles");
    finalUserScore.textContent = (`${userNameValue}, EASY Game: ${countClickEasy} clicks, HARD Game: ${countClickHard} clicks`);
    
}


function scoreDetails() {
    user = new userScore(userNameValue, countClickEasy, countClickHard);
}


function showInitialPage() {
    timer3sHard.classList = ("play-page-style hidden-section");
    initialPage.classList = ("section-styles");
    finishPage.classList = ("section-styles hidden-section");
    userNameBtn.value = "";
    hardGameBtn.classList = ("style-button hidden-button");
    easyHiddenMessage.classList = ("congratulations-message hidden-message")
    countClickEasy = 0;
    easyGameScore.textContent = ("Your score is: ");
    countClickHard = 0;
    hardGameScore.textContent = ("Your score is: ");
}   

function saveUserScore() {
    let userArray = [user]
    let userArrayJson = JSON.stringify(userArray);
    // console.log("SAVE USER SCORE: "+ userJson);

    let scores = localStorage.getItem("scores")== null?userArray:JSON.parse(localStorage.getItem("scores"));  
    console.log("LOCAL STORAGE SCORES: "+localStorage.getItem("scores"))

    console.log("SCORES: " + scores);
    scores.push(user);
    console.log("SCORES after push: " + scores);
    localStorage.setItem("scores",scores);

    // let maxClicks=0;
    // for (let a in localStorage) {
    //     if (typeof(localStorage[a]) === "string"){
    //         console.log(JSON.parse(localStorage[a]));
    //         console.log(a, ' = ', localStorage[a]);
    //     }
    //  }
} 

// "scores": [
//     {
//         username: adkjfnaod
//         clicksEasy: 23
//         clicksHard: 42
//     }]
//     {
//         username: adkjfnaod
//         clicksEasy: 23
//         clicksHard: 42
//     },
//     {
//         username: adkjfnaod
//         clicksEasy: 23
//         clicksHard: 42
//     }
// ]

function countdown3s () {

    if (threeSec == 0){
        timer3s.classList = ("play-page-style hidden-section");
        timer3sHard.classList = ("play-page-style hidden-section");
        threeSec = 3;
        countdownHard.textContent = "";
        console.log(threeSec)
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

// let user = new userScore (userNameBtn.value, clicksEasy, clicksHard)


