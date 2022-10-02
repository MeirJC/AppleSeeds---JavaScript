// 1. Create an array containing 4 population values of 4
// countries of your choice. Store this array into a variable
// called 'populations'
// 2. Create a function called ‘populationPercentages’ that
// takes the population array as an argument.
// 3. Inside the function, create an empty array called
// ‘percentages’.
// 4. Use a for loop to iterate over the population array you
// received as an argument..
// 5. On each iteration use the function we created earlier
// (module 3, ex.3.3-declarations vs expressions) for each
// element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.

const populations = [338, 218, 127, 85];
// [ usa, nigeria,mexico, turkey]

const populationPercentages = (popArr) => {
  const percentages = [];
  for (let k = 0; k < popArr.length; k++) {
    percentages[k] = percentageOfWorld1(popArr[k]);
  }
  return percentages;
};

// section 5 - import from 3.3
const TOTAL_POPULATION = 7900;
// function declaration
function percentageOfWorld1(population) {
  return ((population / TOTAL_POPULATION) * 100).toFixed(2);
}

// call to function execute

let popPercentArr = populationPercentages(populations);
console.log(popPercentArr);
