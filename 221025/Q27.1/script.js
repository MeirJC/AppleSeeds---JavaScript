// Instructions
// Write a function that takes a number as an argument and returns a
// Promise that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a then .catch.
// -------------------------------------------------------------------------------

const greaterThenTen = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num > 10) {
        resolve();
      } else {
        reject();
      }
    }, 1500);
  });
};
greaterThenTen(10)
  .then(() => {
    console.log("Bigger then 10!");
  })
  .catch(() => {
    console.log("Smaller ot Equal to 10");
  });
