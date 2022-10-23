// Instructions
// Answer the following questions:
// ================================================================
// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
// console.log(this);
// ----------------------------------------------------------------
// since we are in the global scope, this refers to the window object.
//that is bacause "this" refers to the closest containing object
// ================================================================
// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?
// const myObj = {
//   name: "Timmy",
//   greet: () => {
//     console.log(`Hello ${this.name}`);
//   },
// };
// myObj.greet();
// ----------------------------------------------------------------
// a. This will point to the document and wil not return the -this.value- as intended.
// the reason is that arrow functions cannot get their own this inside the object. (only if nested inside)
// ---
// b. we can fix this by changing the funtion declaration to explplicit one like this:
// greet: function() {
//     console.log(`Hello ${this.name}`);
// ================================================================
// Question 3:
// In your own words what will this point to and why?
// function myFuncDec() {
//   console.log(this);
// }
// ----------------------------------------------------------------
// inside funtions (not nested inside of other objects) the this keyword refers to the global scope
// ================================================================
// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
// console.log(this);
// };
// myFuncArrow();
// ----------------------------------------------------------------
// arrow functions dont heve their own this, so -this- will refer to global object
// ================================================================
// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?
// document.querySelector(".element").addEventListener(() => {
// console.log(this);
// });
// ----------------------------------------------------------------
// a. First of all the event listener was not declared properly since it sholud get
// 2 arguments, an event and a function. so for start we need to pass the event we are lstening to.
// we are inside the ducument object (querySelector is a document DOM method)
// but since we use an arrow function (that doesnt get her ow this) we get to the nearest
// containing object which is the window object
// ---
// b. To fix this (if the desired resault is to get to the element itself) we need to do
// first add event type, and also change the function declaration to implicit delaration
//instead of the arrow function.
//
// the new function will look like this:
// document.querySelector(".element").addEventListener("click", function () {
//   console.log(this);
// });
// ================================================================
