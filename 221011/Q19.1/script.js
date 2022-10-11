// Instructions
// Please make the following changes to the HTML file while
//   navigating the DOM.
//   Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another subtitle with the text “subtitle 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of
// your
// Note:
//   On the next page, you have the HTML code

const startHere = document.querySelector("li.start-here");
// 1. Change the text from “title 2” to “main title”
startHere.textContent = "main title";
// 2. Add another subtitle with the text “subtitle 4”
startHere.nextElementSibling.firstElementChild.appendChild(
  document.createElement("li")
).textContent = "sub title 4";
// 3. Delete the last <li> element from the list.
// document
startHere.parentElement.lastElementChild.remove();
// 4. Change the <title> element text to “Master Of The Dom”.
// document.querySelector("title").innerText = "Master Of The Dom";
startHere.parentElement.parentElement.parentElement.firstChild.lastElementChild.innerText =
  "Master Of The DOM";
// 5. Change the text of the <p> element ot something else of
// your (choice? i guess)
let insertText = `“Without music, 
life would be a mistake.”
― Friedrich Nietzsche, Twilight of the Idols`;
// document.querySelector("p").innerText = insertText;
startHere.parentElement.nextElementSibling.firstElementChild.innerText =
  insertText;
// document.querySelector("p").style.fontWeight = "bold";
startHere.parentElement.nextElementSibling.firstElementChild.style.fontWeight =
  "bold";
