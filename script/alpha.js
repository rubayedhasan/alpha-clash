// function startPlay() {
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //   homeSection.classList.replace("flex", "hidden");

//   const playgroundSection = document.getElementById("playground");
//   playgroundSection.classList.remove("hidden");
// }

// continue the game
function continueTheGame() {
  const updatedAlphabet = getRandomAlphabet();

  //   show the alphabet in playground screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = updatedAlphabet;

  //   changing style of matching key
  addClassToElement(updatedAlphabet, "bg-orange-400");
}

// function to start the game
function startPlay() {
  // hide section
  addClassToElement("home-screen", "hidden");

  //   show element
  removeClassFromElement("playground", "hidden");

  //   continue the game
  continueTheGame();
}

// keyboard key event to type
document.addEventListener("keyup", function (event) {
  // pressed key from player
  const pressedKey = event.key;

  // expected pressed key from user
  const targetKeyElement = document.getElementById("current-alphabet");
  const targetKey = targetKeyElement.innerText;
  const target = targetKey.toLowerCase();

  // condition to change game stages
  if (pressedKey === target) {
    removeClassFromElement(target, "bg-orange-400");

    // update score
    // get the element
    const scoreElement = document.getElementById("your-score");
    const stringTypeScore = scoreElement.innerText;
    const score = parseInt(stringTypeScore);

    // change the score
    const newScore = score + 1;

    // display the score
    scoreElement.innerText = newScore;

    continueTheGame();
  } else {
    addClassToElement(pressedKey, "bg-red-500");
    removeClassFromElement(target, "bg-orange-400");
    continueTheGame();
  }
  // condition game
  // if (pressedKey === expectedKey) {
  //   continueTheGame();
  // } else {
  // }
});
