// hide a section using id
// function hideSection(elementID) {
//   const element = document.getElementById(elementID);
//   element.classList.add("hidden");
// }

// add class to element
function addClassToElement(elementID, addedClass) {
  const element = document.getElementById(elementID);
  element.classList.add(addedClass);
}

// show a section using id
function shownSection(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}

// generate random alphabets
function getRandomAlphabet() {
  // define the alphabets array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsArray = alphabetString.split("");

  //   generate random index number to access the alphabet array
  const randomNumber = Math.random() * 26;
  const index = Math.round(randomNumber);

  //   get the alphabet
  const alphabet = alphabetsArray[index];
  return alphabet;
}
