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
// function shownSection(elementID) {
//   const element = document.getElementById(elementID);
//   element.classList.remove("hidden");
// }

// remove class from element
function removeClassFromElement(elementID, removedClass) {
  const element = document.getElementById(elementID);
  element.classList.remove(removedClass);
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

// get innerText from element
function getTextValue(elementID) {
  const element = document.getElementById(elementID);
  const textValue = element.innerText;
  return textValue;
}

// get number value from element
function getValueFromElement(elementID) {
  const element = document.getElementById(elementID);
  const elementStrTypeValue = element.innerText;
  const value = parseInt(elementStrTypeValue);
  return value;
}

// set updated value to element
function setValueToElement(elementID, addedValue) {
  const element = document.getElementById(elementID);
  element.innerText = addedValue;
}
