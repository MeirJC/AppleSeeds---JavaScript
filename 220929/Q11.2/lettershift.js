// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

function shiftLetters(str) {
  let letters = str.split("");
  letters = letters.map((letter) => {
    if (letter === " ") {
      return letter;
    } else if (letter === "a") {
      return "z";
    }
    let charCode = letter.charCodeAt(0);
    return String.fromCharCode(charCode - 1);
  });
  return letters.join("");
}

console.log("shifted down the alphabet");
console.log(shiftLetters("shifted down the alphabet"));
