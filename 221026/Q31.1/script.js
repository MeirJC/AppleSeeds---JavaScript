// Instructions
// We are going to use this star wars API to get information.
// We want to get information about 10 characters.
// We want the following information:
// 1. Name
// 2. Height
// 3. Hair Color
// 4. The planet they came from
// 5. Planet population

const titles = ["Name", "Hair", "Height", "Planet Name", "Planet Population"];
const table = document.querySelector(".table");
//function tofetch the data from the API
const fetchData = async (url) => {
  try {
    //feching takes time, so this is asyncronious function
    const response = await fetch(url);
    //will need a wait until completed
    const data = await response.json();
    //.json to conver to json, converting also takes time so we add await
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}; //will return promise
// fetchData("https://swapi.dev/api/people/"); //call the func to get charecters
// fetchData("https://swapi.dev/api/planets/"); //call the func to get planets

const getArrOfCharecters = async () => {
  // const arrOfChar = await fetchData("https://swapi.dev/api/people/");
  // console.log(arrOfChar);
  // const results = arrOfChar.results;
  // console.log(results);
  const { results } = await fetchData("https://swapi.dev/api/people/");
  //get the .results from the promise object
  //
  //not recommended with for - pralal vs serial
  // const arrOfWorlds = [];
  // for (let i = 0; i < results.length; i++) {
  //   const planet = await fetchData(results[i].homeworld);
  //   arrOfWorlds.push(planet);
  // }
  const arrOfPromises = [];
  for (let i = 0; i < results.length; i++) {
    const planet = fetchData(results[i].homeworld);
    arrOfPromises.push(planet);
  }
  const arrOfWorlds = await Promise.all(arrOfPromises);
  console.log(arrOfWorlds);
  const structuredData = structuredChatObj(results, arrOfWorlds);
  return structuredData;
};
getArrOfCharecters();
//structring the data from 2 obj arrays (charecter and worlds) to one obj array
const structuredChatObj = (charArr, WorldsArr) => {
  return charArr.map((char, index) => {
    return {
      name: char.name,
      hair_color: char.hair_color,
      height: char.height,
      planet: {
        name: WorldsArr[index].name,
        population: WorldsArr[index].population,
      },
    };
  });
};
//log the data

// display the data

const paintHead = (text) => {
  const heading = document.createElement("div");
  heading.textContent = text;
  heading.classList.add("title");
  table.appendChild(heading);
  // const subtitles = document.createElement("div");
  // const subtitle = document.createElement("div");
};
const paintRow = (arrOfData) => {
  const row = document.createElement("div");
  row.classList.add("row");

  arrOfData.forEach((e) => {
    const cell = document.createElement("div");
    cell.textContent = e;
    cell.classList.add("cell");
    row.appendChild(cell);
  });
  table.appendChild(row);
};
//
const setSpinner = (bool) => {
  if (bool) {
    const spinner = document.createElement("h3");
    spinner.classList.add("spinner");
    spinner.textContent = "Loading...";
    table.appendChild(spinner);
  } else {
    document.querySelector(".spinner").remove();
  }
};
//
const paintPage = async () => {
  let isLoading = true;
  console.log("isLoading", isLoading);
  paintHead("Star-Wars");
  paintRow(titles);
  setSpinner(isLoading);
  const charDataArr = await getArrOfCharecters();
  charDataArr.forEach((char) => {
    const newArr = [
      char.name,
      char.hair_color,
      char.height,
      char.planet.name,
      char.planet.population,
    ];
    paintRow(newArr);
  });
  isLoading = false;
  setSpinner(isLoading);
  console.log("isLoading", isLoading);
  // console.log(charDataArr);
};
paintPage();
//style the data
//  async -> await -- wait for the promise to reslove, so we get the resault and not the promise
