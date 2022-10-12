// Instructions
// Create a webpage that has an input field for the user’s age and
// a button. If the user enters a number above 18, make the text
// “you can drink appear”. If the user enters a number below 18,
//   make the text “you’re too young” appear.

const ageInput = document.querySelector("#age");
const outputMessage = document.querySelector("#drinkOrNot")
const button = document.querySelector("input[type=button]")

button.addEventListener("click",() => {
  Number(ageInput.value) >=18 ? outputMessage.innerText = "You can drink! Cheers mate! 🍻" : outputMessage.innerText = "You’re too young";
})
