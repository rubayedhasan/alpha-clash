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
  setValueToElement("current-alphabet", updatedAlphabet);

  // const currentAlphabet = document.getElementById("current-alphabet");
  // currentAlphabet.innerText = updatedAlphabet;

  //   changing style of matching key
  addClassToElement(updatedAlphabet, "bg-orange-400");
}

// function to start the game
function startGame() {
  // hide section
  addClassToElement("home-screen", "hidden");
  addClassToElement("score-board", "hidden");

  //   show element
  removeClassFromElement("playground", "hidden");

  // reset life and score
  setValueToElement("your-life", 5);
  setValueToElement("your-score", 0);

  //   continue the game
  continueTheGame();
}

// keyboard key event to type
document.addEventListener("keyup", function (event) {
  // pressed key from player
  const pressedKey = event.key;

  // expected pressed key from user
  const targetKey = getTextValue("current-alphabet");
  const target = targetKey.toLowerCase();

  // press 'Enter' to start game
  if (pressedKey === "Enter") {
    startGame();
  }

  // quit the game by pressing 'Escape'
  if (pressedKey === "Escape") {
    gameEnd();
  }

  // condition to change game stages
  if (pressedKey === target) {
    // update score
    const score = getValueFromElement("your-score");
    const newScore = score + 1;
    setValueToElement("your-score", newScore);

    removeClassFromElement(target, "bg-orange-400");
    continueTheGame();

    // get the element
    // const scoreElement = document.getElementById("your-score");
    // const stringTypeScore = scoreElement.innerText;
    // const score = parseInt(stringTypeScore);

    // change the score
    // const newScore = score + 1;

    // display the score
    // scoreElement.innerText = newScore;
  } else {
    removeClassFromElement(target, "bg-orange-400");
    addClassToElement(pressedKey, "bg-red-500");

    // reduce the life
    const life = getValueFromElement("your-life");
    const newLife = life - 1;
    setValueToElement("your-life", newLife);

    // next round step
    // continueTheGame();

    // end the game
    if (newLife === 0) {
      gameEnd();
    }

    // get the life element
    // const lifeElement = document.getElementById("your-life");
    // const stringTypeLifeValue = lifeElement.innerText;
    // const life = parseInt(stringTypeLifeValue);

    // reduce the life
    // const newLife = life - 1;

    // update the life(display it )
    // lifeElement.innerText = newLife;
  }
});

// end the game
function gameEnd() {
  addClassToElement("playground", "hidden");
  removeClassFromElement("score-board", "hidden");

  // erase styles
  const currentAlphabet = getTextValue("current-alphabet");
  removeClassFromElement(currentAlphabet, "bg-orange-400");

  // set final score
  const finalScore = getTextValue("your-score");
  setValueToElement("final-score", finalScore);
}
