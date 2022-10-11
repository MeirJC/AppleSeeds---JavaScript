// Instructions
// We are getting this data from an API:
//   const data = [
//     {
//       name: "John",
//       birthday: "1-1-1995",
//       favoriteFoods: {
//         meats: ["hamburgers", "sausages"],
//         fish: ["salmon", "pike"],
//       },
//     },
//     {
//       name: "Mark",
//       birthday: "10-5-1980",
//       favoriteFoods: {
//         meats: ["hamburgers", "steak", "lamb"],
//         fish: ["tuna", "salmon", "barracuda"],
//       },
//     },
//     {
//       name: "Mary",
//       birthday: "1-10-1977",
//       favoriteFoods: {
//         meats: ["ham", "chicken"],
//         fish: ["pike"],
//       },},
//     {
//       name: "Thomas",
//       birthday: "1-10-1990",
//       favoriteFoods: {
//         meats: ["bird", "rooster"],
//         fish: ["salmon"],
//       },
//     },
//     {
//       name: "Mary",
//       birthday: "1-10-1977",
//       favoriteFoods: {
//         meats: ["hamburgers", "lamb"],
//         fish: ["anchovies", "tuna"],
//       },
//     },
//   ];
// We are not getting the data as we want it. We are going to need
// to massage the data.
//   Create separate functions for each question below:
// 1. Create a function that returns all the names from the array.
// 2. Create a function that returns all the objects that are born
// before 1990.
// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.Example:
// {
//   hamburgers: 3,
//     sausages: 1,
//   salmon: 3,
//   pike: 2,
//   steak: 1,
//   lamb: 2,
//   tuna: 2,
//   barracuda: 1,
//   ham: 1,
//   chicken: 1,
//   bird: 1,
//   rooster: 1,
//   anchovies: 1
// }

const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1. Create a function that returns all the names from the array.
// const namesFromArr = data.map((user) => {
//   return user.name;
// });
// console.log(namesFromArr);

// 2. Create a function that returns all the objects that are born
// before 1990.
// const beforeYear = 1990;
// const bornBefore = data.filter((user) => {
//   return Number(user.birthday.slice(-4)) < beforeYear;
// });
// console.log(bornBefore);

// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.Example:
// {
//   hamburgers: 3,
//     sausages: 1,
//   salmon: 3,
//   pike: 2,
//   steak: 1,
//   lamb: 2,
//   tuna: 2,
//   barracuda: 1,
//   ham: 1,
//   chicken: 1,
//   bird: 1,
//   rooster: 1,
//   anchovies: 1
// }

// After
let foodObj = {};
data.forEach((current) => {
  let foods = current.favoriteFoods.meats.concat(current.favoriteFoods.fish);
  foods.forEach((food) => {
    if (!foodObj[food]) {
      foodObj[food] = 1;
    } else {
      foodObj[food]++;
    }
  });
});

// Before
// for (let i = 0; i < data.length; i++) {
//   let current = data[i];
//   let fav = current["favoriteFoods"];
//   let meats = fav["meats"];
//   let fish = fav["fish"];
//   for (let j = 0; j < meats.length; j++) {
//     if (!foodObj[meats[j]]) {
//       foodObj[meats[j]] = 1;
//     } else {
//       foodObj[meats[j]]++;
//     }
//   }
//   for (let j = 0; j < fish.length; j++) {
//     if (!foodObj[fish[j]]) {
//       foodObj[fish[j]] = 1;
//     } else {
//       foodObj[fish[j]]++;
//     }
//   }
// }
console.log(foodObj);
