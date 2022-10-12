// Instructions
// Create a webpage that has an image of a lightbulb.
// When the user clicks the lightbulb, it should be turned
// on, clicking it again will turn it off.

const bulbImg = document.querySelector("#Bulb");
const on = (document.querySelector("#Bulb").src = "./images/bulbOn.png");
const off = (document.querySelector("#Bulb").src = "./images/bulbOff.png");
let switchOnOff = 0;

bulbImg.addEventListener("click", () => {
  switchOnOff++;
  if (switchOnOff % 2 === 1) {
    document.querySelector("#Bulb").src = "./images/bulbOn.png";
  } else {
    document.querySelector("#Bulb").src = "./images/bulbOff.png";
  }
  console.log(switchOnOff);
});
