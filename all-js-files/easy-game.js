let countClickEasy = 0;

function clickEasy() {
    countClickEasy++

}


function showEasyPage() {
    initialPage.classList = ("hidden-section section-styles");
    playSectionEasy.classList = ("section-styles");
    mainGameSectionEasy.classList = ("play-page-section");
    
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
        countdown10s();
        countdown10.classList = ("countdown-10");
        setTimeout(() => {
            goToHardPage.classList = ("play-page-style");
            clicksEasyGame.classList = ("play-page-style hidden-section");
            easyHiddenMessage.classList = ("congratulations-message");
            easyGameScore.textContent += countClickEasy + " clicks!!";
            hardGameBtn.classList = ("hard-button");
            clickArea.classList = ("hidden-button clickon");
            countdown10.classList = ("hidden-message countdown-10");
        }, 10000);
     }, 3000);
     
     //end easy mode
}   
