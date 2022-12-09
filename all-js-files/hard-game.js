let countClickHard = 0;

function clickHard() {
    countClickHard++

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
        countdown10s();
        countdown10Hard.classList = ("countdown-10-hard");
        randomMoveBttn.classList = ("random-move clickon");
        setTimeout(() => {
            goToHardPage.classList = ("play-page-style");
            clickHardGame.classList = ("play-page-style hidden-section");
            easyHiddenMessage.classList = ("congratulations-message");
            hardHiddenMessage.classList = ("congratulations-message");
            hardGameScore.textContent += countClickHard + " clicks!!";
            scoreSection.classList = ("play-page-style");
            goToFinishPage.classList = ("go-finish-page ");
            clickArea.classList = ("hidden-button clickon");
            countdown10Hard.classList = ("hidden-message countdown-10-hard");
            randomMoveBttn.style = "";
            randomMoveBttn.classList = ("hidden-button");


        }, 10000);
     }, 3000);
}