// Instructions
// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.
//-------------------------------------------------------------------
// 1. Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.

function isString(str, func) {
  if (typeof str === "string") {
    func(str);
  }
}

function logToScreen(callbackStr) {
  console.log(callbackStr);
}

isString("YES!!!",logToScreen);
//------------------------------------------------------------------
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.

function firstWordUpperCase(str,callFunc) {
  let strToArr=str.split(' ');
  let firstWord = strToArr[0].toLocaleUpperCase();
  strToArr.shift();
  strToArr.unshift(firstWord);
  strToArr=strToArr.toString()
  console.log(callFunc(strToArr));
}

function putDashes(str) {
  return str.replaceAll(',', '-');
}

firstWordUpperCase("sweet home Alabama",putDashes)
//------------------------------------------------------------------
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice. ^ ^ ^ DONE ^ ^ ^
//------------------------------------------------------------------
// 4. Create your own function that will receive from one of its
// arguments a callback function.

//ill use both of the functions calling each other nested
function firstWordUpperCase2(str,callFunc) {
  let strToArr=str.split(' ');
  let firstWord = strToArr[0].toLocaleUpperCase();
  strToArr.shift();
  strToArr.unshift(firstWord);
  strToArr=strToArr.toString()
  return(callFunc(strToArr));
}
let secondOut = firstWordUpperCase2("one small step for man... thats it, one small step",putDashes);
isString(secondOut,logToScreen);