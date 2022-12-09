function userScore(userName, clicksEasy, clicksHard) {
  this.userName = userName;
  this.clicksEasy = clicksEasy;
  this.clicksHard = clicksHard;
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

function checkValueInputName() {
  if (userNameBtn.value !== "") {
      showEasyPage()
  }else {
      alert("Enter a user name!!!")
  }
}
