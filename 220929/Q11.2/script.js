// Instructions
// Answer the questions below and use the map or the
// forEach method :
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an objectwhich has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.

function doubleValues(arr) {
  const double = arr.map(function (item) {
    return item * 2;
  });
  return double;
}
// const numArr = [2, 3, 5, 7, 8, 11, 13, 17, 19, 29, 32];
// console.log(doubleValues(numArr))

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.

function onlyEvenValues(arr) {
  const evenArr = [];
  arr.forEach((element) => {
    if (element % 2 === 0) {
      evenArr.push(element);
    }
  });
  return evenArr;
}
// const numArr = [2, 3, 5, 7, 8, 11, 13, 17, 19, 29, 32];
// console.log(onlyEvenValues(numArr))

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.

function slicer(arr) {
  const slicedArr = [];
  arr.forEach((element, i) => {
    if (i === 0 || i === arr.length - 1) {
      slicedArr.push(element.toString());
    }
  });
  return slicedArr;
}

// console.log(slicer(["a", "e", "i", "o", "u"]))

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.

function vowelCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.split("");
  const result = {};
  str.forEach((item) => {
    if (vowels.includes(item) && !result[item]) {
      result[item] = 1;
    } else if (vowels.includes(item)) {
      result[item]++;
    }
  });
  console.log(result);
  return result;
}
// let someStr = "abcdefgduuuuudoooodiiide";
// console.log(vowelCount(someStr))

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capitalize(str) {
  return str.toUpperCase();
}

// console.log(capitalize("asdjahdas"))

// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

function shiftLetters(str) {
  let moveBy = 1; // COULD BE DEFINED TO MOVE BY ANY NUMBER OF LETTERS HERE
  let k = moveBy; // k will be changed and restarted
  // converting all numbers to ascii values
  let charsToNumbers = str
    .toLowerCase()
    .split("")
    .map(function (char, i, arr) {
      return arr[i].charCodeAt();
    });
  // console.log(charsToNumbers)
  for (let j = 0; j < charsToNumbers.length; j++) {
    // keeping spaces
    if (charsToNumbers[j] === 32) {
      charsToNumbers[j] = String.fromCharCode(charsToNumbers[j]);
      continue;
    }
    // keeping a-1 in alphbet range
    if (charsToNumbers[j] - k < 97) {
      // math trick k=1 z.charCodeAt()=122 (a-1).charCodeAt() = 96
      // 1+=122-97 = 26  ---> 26 % 26 = 0 ---> k=1 --- return 122(value of z) - 1
      k += 122 - charsToNumbers[j];
      k = k % 26;
      charsToNumbers[j] = String.fromCharCode(122 - k);
    } else {
      // all other letters, no problem
      charsToNumbers[j] = String.fromCharCode(charsToNumbers[j] - k);
    }
    k = moveBy;
  }
  return charsToNumbers.join("");
}

// console.log(shiftLetters("abcd efgh ijk")) // zabc defg hij
// console.log(shiftLetters("xiz mjlf uijt") + "???") //why like this???

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

function swapCase(str) {
  let newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    if (i % 2 === 0) {
      newStr[i] = newStr[i].toUpperCase();
    }
  }
  // console.log(newStr[i])
  return newStr.join(" ");
}

// console.log(swapCase("why like this why so serious?")) //WHY like THIS why SO serious?
