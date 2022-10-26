// Instructions
// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize them,
// and then the second function, sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once with
// an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch.

const makeAllCaps = (arr) => {
  let upperArr = [];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        arr.filter((item) => {
          return typeof item !== "string";
        }).length > 0
      ) {
        reject();
      } else {
        resolve();
        arr.forEach((word) => upperArr.push(word.toUpperCase));
        console.log(upperArr);
      }
    }, 1500);
  });
};
