// Instructions
// Create an object with a name property.
// The object should also have a method that prints its name and
// another method that prints its name after a second with the help
// of setTimeOut. in this exercise,
// you are not allowed to use arrow functions.

const someObj = {
  name: "Meir",
  printName: function () {
    // console.log("inside printName: ", this);
    console.log(this.name);
  },
  printAgainDelay: function () {
    // console.log("inside printAgainDelay: ", this);
    setTimeout(
      function () {
        // console.log("inside setTimeout: ", this);
        this.printName();
      }.bind(someObj),
      1000
    );
  },
};
