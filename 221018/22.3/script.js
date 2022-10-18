// "a" char code = 97, "z" char code = 122
//the Math.round(Math.random() * (122-97 = 25) gives us numbers from 0 (char = a) to 25 ("a"+25 = "z")
let randomLetterCharCode =
  "a".charCodeAt() +
  Math.round(Math.random() * ("z".charCodeAt() - "a".charCodeAt()));
//this stores the secret char as number
let randomLetter = String.fromCharCode(randomLetterCharCode);
//this converts the number of char code to letter
let secretChar = document.querySelector("#secret");
// html elements
const guessStatus = document.querySelector("#guessStatus");
const guessedLetters = document.querySelector("#guessedLetters");
const guessedLettersArr = [];
const alphabet = "abcdefghijklmnopqrstuvwxyz";
//making the guess transparant so it would not show but still keep space
guessStatus.style.color = "transparent";
//keypress event listener
window.addEventListener("keyup", function eventlisten(e) {
  console.log(randomLetter);
  if (alphabet.includes(e.key)) {
    if (e.key === randomLetter) {
      //if currect inster the letter to the letter box
      secretChar.innerHTML = e.key;
      guessStatus.style.color = "green";
      guessStatus.innerHTML = `You guessed right, the letter is ${e.key}`;
      guessStatus.style.display = "block";
      window.removeEventListener("keyup", eventlisten);
    } else {
      guessedLettersArr.push(e.key);
      guessedLetters.innerHTML = guessedLettersArr;
      guessStatus.innerHTML = "Nope, Wrong Letter";
      guessStatus.style.color = "crimson";
      guessStatus.style.display = "block";
    }
  }
});
