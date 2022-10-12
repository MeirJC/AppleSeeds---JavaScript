// Instructions
// Create a webpage with one field and one button.
// The user can choose the number of smileys, and you have
// to make them appear on the screen. If the user enters an input
// that is not a number show him an error message.

const input = document.querySelector("input[type=text]");
const button = document.querySelector("input[type=button]");
const container = document.querySelector(".Container");

button.addEventListener("click", () => {
  let inputValue = Number(input.value);
  let smiley = "&#128579";
  let smileStr = "";
  console.log(inputValue);
  if (inputValue) {
    smileStr = smiley.repeat(inputValue);
  } else {
    smileStr = "NOT A VALID INPUT!";
  }
  container.innerHTML = smileStr;
});
