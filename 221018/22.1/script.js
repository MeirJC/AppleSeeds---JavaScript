// Create a webpage that has a form (asks the user for its name,
// age, and email address) and when the user clicks submit, open
// a text window that writes all the information and asks for his
// confirmation. If he clicks on the confirm button, tell him
// “congratulations you successfully sent this form” if he clicks on
// change information, give him the possibility to change the
// information, and ask again for his confirmation.

// before submitting variables
const userName = document.querySelector("input[name=userName]");
const userAge = document.querySelector("input[name=age]");
const userEmail = document.querySelector("input[name=email]");
// before submitting buttons
const inputButton = document.querySelector("input[value=Submit]");
// after submitting variables
const recivedInfo = document.querySelector("#recivedInfo");
const textWindow = document.querySelector("#textWindow");
const success = document.querySelector("#success");
// after submitting buttons
const goBack = document.querySelector("#goBack");
const confirmDetails = document.querySelector("#confirm");
// funtions of the page
// first button
inputButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value && userAge.value && userEmail.value !== "") {
    recivedInfo.innerText = `these are the details, please confirm or go back to edit:
                            ${userName.value}
                            ${userAge.value}
                            ${userEmail.value}`;
    textWindow.style.display = "flex";
  }
});
//second screen button
goBack.addEventListener("click", () => {
  textWindow.style.display = "none";
});
confirmDetails.addEventListener("click", () => {
  success.style.color = "green";
  success.style.display = "block";
  goBack.style.display = "none";
  confirmDetails.style.display = "none";
});
