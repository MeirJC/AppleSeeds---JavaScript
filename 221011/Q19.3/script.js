// Instructions
// Many times an application needs to verify the account by
// sending a verification code by text message.
// Let's create functionality that enables the user to paste the
// verification code to the input fields.
// Features:
// 1. The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
// 2. The user is allowed to paste the verification code.
// 3. An extra challenge will be to auto submit the form once all
// inputs all populated.
// Things to think about:
// What happens if the user pastes only 3 digits and there are
// 6 inputs to fill out.
// Here is an example.
// Things to help you:
// Google “paste event” to understand how to listen to a
// paste event.Google “clipboardData” to find out how to get the value of
// a paste event.
const userCode = "135579";
const charboxesNodeList = [...document.querySelectorAll("input.charBox")];

charboxesNodeList.forEach((box, i) => {
  box.addEventListener("keydown", (event) => {
    if (event.keyCode === 8 && event.target.value === "")
      charboxesNodeList[Math.max(0, i - 1)].focus();
    //focus to the left when pressing backspace (key code = 8) after box is clear
  });
  box.addEventListener("input", (event) => {
    const [firstNum, ...restOfChars] = event.target.value;
    event.target.value = firstNum ?? "";
    //The target property of the Event interface is a reference to the object onto which the event was dispatched.
    // firstNum will be undefined when backspace was entered, so set the input to ""
    const lastInputBox = i === charboxesNodeList.length - 1;
    const didInsertContent = firstNum !== undefined;
    if (didInsertContent && !lastInputBox) {
      // continue to input the chars of the string
      charboxesNodeList[i + 1].focus(); // focus to the right after input
      charboxesNodeList[i + 1].value = restOfChars.join("");
      charboxesNodeList[i + 1].dispatchEvent(new Event("input")); // invoking the event listeners in order
    }
  });
});
// Submit function - Check Password
// on press submit
function submitFunc() {
  if (lastBox.value === "") {
    return;
  } // keeps it from activating after 4 chars input (WHY???)
  const code = charboxesNodeList.map(({ value }) => value).join(""); // join boxes value to string
  code === userCode
    ? window.alert("YESSS - Correct Password 🤙")
    : window.alert("Oh no you didn't!!! Cops are on their way 🚔");
}
// on last box full
const lastBox = document.querySelector("div>input:last-child");
lastBox.addEventListener("input", submitFunc, true);

// TBH If this brakes, I have no idea how to pix it (first day of DOM)
// Thank you Google and God for getting me this far :)
