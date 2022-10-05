// Instructions
// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.
//   Block 1
// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);
//----------------------------------------------------
// var firstResult = someFunction(9); -->getting back the inner function
// var result = firstResult(2); --> when calling the function we get value 5 due to closure
// b=5 is a global variable because its declared implicitly and als the closest to the function scope.
//----------------------------------------------------
// Block 2
// var a = 1;
// function b2() {
//   a = 10;
//   return;
//   function a() { }
// }
// b2();
// console.log(a);
//----------------------------------------------------
// b2() --> gets back the value of a=10, but nothing is dome with it or stored anywhere
// the console.log(a) logs the nearest a var available which is the a=1 ont the beginning
//----------------------------------------------------
// Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}
//----------------------------------------------------
//
//----------------------------------------------------