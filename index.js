// changes the content of the third bulleted list from "Third" to my name "Benjie"
document.querySelector(
  "ul"
).firstElementChild.nextElementSibling.nextElementSibling.innerHTML = "Benjie";

// changes the background color of the button to red
document.querySelector("button").style.backgroundColor = "red";
