// The following exercise contains the following subjects:
// ● scope
// ● hoisting
//----------------------------------------------------------------
// Instructions
//----------------------------------------------------------------
// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.
//----------------------------------------------------------------
//   Block 1
// function funcA() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
//funcA();
//----------------------------------------------------------------
// console.log(a) -would be log undefined, since var was declared in the same scope
// yet the value was assigned only after
// The function foo would work and return 2 due to hoisting so console.log(foo()) //--> 2
//----------------------------------------------------------------
// Block 2
// var fullName = 'John Doe';
// var obj = {
//   fullName: 'Colin Ihrig',
//   prop: {
//     fullName: 'Aurelio De Rosa',
//     getFullName: function () {
//       return this.fullName;
//     }
//   }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());
//----------------------------------------------------------------
// first console.log would print obj->prop->fullName(): -> 'Aurelio De Rosa'
// second console.log test() would not work since it is not a function
//----------------------------------------------------------------
// Block 3
// function funcB() {
//   let a = b = 0;
//   a++;
//   return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);
//----------------------------------------------------------------
// first console log would be undefined since let declarations are not available outside the function
// second console log would (surprisingly) output type of number - since b is implicitly declared
// in that case b was created as a global variable.
//----------------------------------------------------------------
// Block 4
// function funcC() {
//   console.log("1");
// }
// funcC();
// function funcC() {
//   console.log("2");
// } funcC();
//----------------------------------------------------------------
// in this scenario the last function would be the relevant because of hoisting
// (functions are "moved" to top before executing the rest of the code)
//----------------------------------------------------------------
// Block 5
// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e);
//----------------------------------------------------------------
// since d is implicitly declared in that case d was created as a global variable.
// so console log d would work.
// the second console log would not work, since var e is declared inside the function and called outside of it.
//----------------------------------------------------------------
// Block 6
// function funcE() {
//   console.log("Value of f in local scope: ", f);
// }
// console.log("Value of f in global scope: ", f);
// var f = 1;
// funcE();
//----------------------------------------------------------------
// f is defined in the global scope and also a var which means it is available inside the function too.
//----------------------------------------------------------------