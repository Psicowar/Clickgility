playBtn.addEventListener("click", showEasyPage)
startBtn.addEventListener("click", startEasyGame)
hardGameBtn.addEventListener("click", startHardGame)

let threeSec = 3;
let tenSec = 10;

// Hides initial page and shows games section

let user = new userScore();


function showEasyPage() {
    // initialPage.classList = ("hidden-section section-styles");
    playSection.classList = ("section-styles");

    // console.log("Nam e Button: " + userNameBtn.value)

    mainGameSection.classList = ("play-page-section");
    //user = new UserScore(userNameBtn.value, "", "");
    user.userName = userNameBtn.value;
    user.clicksEasy = 5;
    user.clicksHard = 51;

    // console.log(user);
    saveUserScore();
}

// shows 3s t   imer when clicking start and hides main-game-section

function startEasyGame() {

    mainGameSection.classList = ("play-page-style hidden-section");
    timer3s.classList = ("play-page-style");

    countdown3s();
    
    //timeout 3 s
    setTimeout(() => {
        // timer3s.classList = ("play-page-style hidden-section");
        easyGame.classList = ("play-page-style");
         //timeout 10 sec
         setTimeout(() => {
             congratulations.classList = ("play-page-style");
             easyGame.classList = ("play-page-style hidden-section");
             hiddenMessage.classList = ("congratulations-message");
         }, 10000);
     }, 3000);

     //end easy mode
     user.clicksEasy = 2;
}

function startHardGame() {
    easyGame.classList = ("play-page-style hidden-section");
    hardGame.classList = ("play-page-style");



    //save userScore

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
        timer3s.classList = (" play-page-style hidden-section");
        return;
    } else {
        countdown3.textContent = threeSec;
        setTimeout(() => {
            threeSec--;
            countdown3s();
        }, 1000);
    }

}

// let user = new userScore (userNameBtn.value, clicksEasy, clicksHard)

easyGame.addEventListener("click", countClickEasy);
