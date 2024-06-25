// hide a section using id
function hideSection(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}

// show a section using id
function shownSection(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}
