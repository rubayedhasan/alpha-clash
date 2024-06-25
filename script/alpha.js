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
  shownSection("playground");

  //   continue the game
  continueTheGame();
}
