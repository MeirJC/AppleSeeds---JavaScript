const ageInput = document.querySelector("#age");
const outputMessage = document.querySelector("#drinkOrNot")
const button = document.querySelector("input[type=button]")

button.addEventListener("click",() => {
  Number(ageInput.value) >=18 ? outputMessage.innerText = "You can drink! Cheers mate! 🍻" : outputMessage.innerText = "You’re too young";
})
