// Instructions
// You have these elements in your HTML file:
// <div id="myFirstDiv"></div>
// <div id="mySecondDiv"></div>
// <div id="myThridDiv"></div>
// <div id="myFourthDiv"></div>
// Somebody selected the elements and stored them into
// individual variables like this:
// const myFirstDiv =
// document.querySelector("#myFirstDiv");
// const mySecondDiv =
// document.querySelector("#mySecondDiv");
// const myThirdDiv =
// document.querySelector("#myThirdDiv");
// const myFourthDiv =
// document.querySelector("#myFourthDiv");
// Is there a better way you can store the individual elements
// with giving them different names?
// gettig them with querySelectorAll to a node list
// and then spread to an array where they would be accesible with mydivs[]
let myDivs = [...document.querySelectorAll("div")];
