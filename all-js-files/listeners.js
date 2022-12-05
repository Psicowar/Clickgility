playBtn.addEventListener("click", showEasyPage)
startBtn.addEventListener("click", startEasyGame)
hardGame.addEventListener("click", startHardGame)
hardGameBtn.addEventListener("click", showFinishPage)


let threeSec = 3;
let tenSec = 10;

// Hides initial page and shows games section



function showEasyPage() {
    initialPage.classList = ("hidden-section section-styles");
    playSection.classList = ("section-styles");
    mainGameSection.classList = ("play-page-section");
}




// shows 3s t   imer when clicking start and hides main-game-section

function startEasyGame() {

    mainGameSection.classList = ("play-page-style hidden-section");
    timer3s.classList = ("play-page-style");

    countdown3s();
    
    //timeout 3 s
    setTimeout(() => {
        timer3s.classList = ("play-page-style hidden-section");
        easyGame.classList = ("play-page-style");
         //timeout 10 sec
         setTimeout(() => {
             congratulations.classList = ("play-page-style");
             easyGame.classList = ("play-page-style hidden-section");
             hiddenMessage.classList = ("congratulations-message");
         }, 10000);
     }, 3000);

     //end easy mode
}



function startHardGame() {
    timer3sHard.classList = ("play-page-style");
    easyGame.classList = ("play-page-style hidden-section");
    
    
    countdown3s();
    
    setTimeout(() => {
        hardGame.classList = ("play-page-style");
         //timeout 10 sec
         setTimeout(() => {
             congratulations.classList = ("play-page-style");
             hardGame.classList = ("play-page-style hidden-section");
             hiddenMessage.classList = ("congratulations-message");
         }, 10000);
     }, 3000);
    

    //save userScore

}


function showFinishPage() {
    hardGame.classList = ("play-page-style");
    congratulations.classList = ("play-page-style hidden-section");
    hiddenMessage.classList = ("congratulations-message hidden-message")
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

easyGame.addEventListener("click", countClickEasy);
