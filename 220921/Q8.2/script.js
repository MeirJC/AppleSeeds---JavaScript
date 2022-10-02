// 1. Create an object called ‘myCountry’ for a country of your
// choice, containing properties ‘country’, ‘capital’,
// ‘language’, ‘population’ and ‘neighbours’ (an array)
// 2. Add a method to the object called 'describe' to the
// 'myCountry' object. With the help of the ‘this’ keyword, this
// method will log a string like this to the console: ‘Finland
// has 6 million people, their mother tongue is Finnish, they
// have 3 neighbouring countries and a capital called
// Helsinki’.
// 3. Call the ‘descrbie method’.
// 4. Add a method called 'checkIsland' to the 'myCountry'
// object. This method will set a new property on the object,
//     called 'isIsland'. 'isIsland' will be true if there are no
// neighbouring countries, and false if there are. Use the
// ternary operator to set the property.

// 1. Create an object called ‘myCountry’ for a country of your
// choice, containing properties ‘country’, ‘capital’,
// ‘language’, ‘population’ and ‘neighbours’ (an array)

// const myCountry = {
//     details:[‘Australia’, ‘Canberra’,‘English’, '25,365,745' , ‘no’]
// };

// 2. Add a method to the object called 'describe' to the
// 'myCountry' object. With the help of the ‘this’ keyword, this
// method will log a string like this to the console: ‘Finland
// has 6 million people, their mother tongue is Finnish, they
// have 3 neighbouring countries and a capital called
// Helsinki’.

// const myCountry = {
//     details: ["Australia", "Canberra","English", '25' , "no"],
//     describe: function (){
//     console.log(`${this.details[0]} has ${this.details[3]} million people, their mother tongue is ${this.details[2]}, they have ${this.details[4]} neighbouring countries and a capital called ${this.details[1]}`)},
//
// }

// 3. Call the ‘describe method’.

// myCountry.describe();

// 4. Add a method called 'checkIsland' to the 'myCountry'
// object. This method will set a new property on the object,
//     called 'isIsland'. 'isIsland' will be true if there are no
// neighbouring countries, and false if there are. Use the
// ternary operator to set the property.

const myCountry = {
  details: ["Australia", "Canberra", "English", "25", ["no"]],
  describe: function () {
    console.log(
      `${this.details[0]} has ${this.details[3]} million people, their mother tongue is ${this.details[2]}, they have ${this.details[4]} neighbouring countries and a capital called ${this.details[1]}`
    );
  },
  checkIsland: function () {
    this.details[4].lenght === 1 && this.details[4] === "no"
      ? (this.isIsland = true)
      : (this.isIsland = false);
  },
};

myCountry.describe(); //Australia has 25 million people, their mother tongue is English, they have no neighbouring countries and a capital called Canberra
myCountry.checkIsland(); // Calling checkIsland method
console.log(myCountry); //{ details: [ 'Australia', 'Canberra', 'English', '25', 'no' ],describe: [Function: describe],checkIsland: [Function: checkIsland], isIsland: true}
