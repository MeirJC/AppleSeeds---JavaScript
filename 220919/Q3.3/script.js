const TOTAL_POPULATION = 7900;
// function declaration
function percentageOfWorld1(population) {
  return ((population / TOTAL_POPULATION) * 100).toFixed(2);
}
let chinaPercent = percentageOfWorld1(1425.88);
let indiaPercent = percentageOfWorld1(1417.17);
let usaPercent = percentageOfWorld1(338.29);

console.log(`China population is ${chinaPercent}% of world population`);
console.log(`India population is ${indiaPercent}% of world population`);
console.log(`USA population is ${usaPercent}% of world population`);

// function expression
const percentageOfWorld2 = function (population) {
  return ((population / TOTAL_POPULATION) * 100).toFixed(2);
};
let indonesiaPercent = percentageOfWorld2(275.5);
let pakistanPercent = percentageOfWorld2(235.82);
let nigeriaPercent = percentageOfWorld2(218.54);

console.log(`Indonesia population is ${indonesiaPercent}% of world population`);
console.log(`Pakistan population is ${pakistanPercent}% of world population`);
console.log(`Nigeria population is ${nigeriaPercent}% of world population`);
