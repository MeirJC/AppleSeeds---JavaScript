let currentDate = new Date();
const monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Current Day by name
let currentDayName = daysArray[currentDate.getDay()];
// Current Day by number
let currentDayNumber = currentDate.getDate();
// Current Month by name
let currentMonth = monthsArray[currentDate.getMonth()];
// Current Year by number
let currentYear = currentDate.getFullYear();

function fullDate (dayName,dayNumber,monthName,yearNumber) {
    return ("Today is " + dayName + " the " + dayNumber + " of " + monthName + " " + yearNumber);
}

console.log(fullDate(currentDayName,currentDayNumber,currentMonth,currentYear));