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




function randomMove() {
    const height = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;
    let positionY = Math.floor((Math.random() * height/2) -350);
    let positionX = Math.floor((Math.random() * width/2) -400);
    randomMoveBttn.style.transform = `translate(${positionX}px, ${positionY}px)`;
  
    
}

function updateLog(){
    
    let userLog = JSON.parse(localStorage.getItem("users"));
    let easyClickArraySorted = [...userLog].sort((a, b) => (b.clicksEasy - a.clicksEasy));
    let hardClickArraySorted = [...userLog].sort((a, b) => (b.clicksHard - a.clicksHard));
    
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

function countdown10s() {
    if (tenSec == 0){
        countdown10.classList = ("hidden-message countdown-10");
        countdown10Hard.classList = ("hidden-message countdown-10-hard")
        tenSec = 10
        return
    } else {
        countdown10.textContent = tenSec;
        countdown10Hard.textContent = tenSec;
        setTimeout(() => {
            tenSec--;
            countdown10s();
        }, 1000);
    }
}