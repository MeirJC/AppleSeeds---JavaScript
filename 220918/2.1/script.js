function countryInfo(country, population, capitalCity) {
    let funcText = country + " has " + population + " people and its capital city is " + capitalCity + ".";
    return (funcText);
}

let isr = "Israel";
let isrPopulation = "9.2 Million";
let isrCapital = "Jerusalem";

let spa = "Spain";
let spaPopulation = "47.3 Million";
let spaCapital = "Madrid";

let prtg = "Portugal";
let prtgPopulation = "10.3 Million";
let prtgCapital = "Lisbon";

let isrFuncOut = countryInfo(isr, isrPopulation, isrCapital);
let spaFuncOut = countryInfo(spa, spaPopulation, spaCapital);
let prtgFuncOut = countryInfo(prtg, prtgPopulation, prtgCapital);

console.log(isrFuncOut);
console.log(spaFuncOut);
console.log(prtgFuncOut);