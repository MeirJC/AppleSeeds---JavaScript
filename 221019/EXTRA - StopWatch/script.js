// Create a web page that has a stopwatch with a start and stop
// button.
// ● The stopwatch should have milliseconds, seconds, and
// minutes.
// ● When you click on the start button for the first time, the
// timer will start running (from 00:00:00 to 60:00:00 minutes)
// ● When you click on the stop button, it will freeze the time
// that elapsed from the start.
// ● When you click start again it will continue counting the
// time, from where it stopped.
// ----------------------------------------------------------------------------
//Buttons
const resetBtn = document.querySelector("#resetBtn");
const stopBtn = document.querySelector("#stopBtn");
const startBtn = document.querySelector("#startBtn");
//Variables for HTML content
const ms = document.querySelector("#ms");
const sec = document.querySelector("#sec");
const min = document.querySelector("#min");
//Variablesfor JS count
let minCount = 0;
let secCount = 0;
let msCount = 0;
let unit = 0;
//
function startTimer() {
  msCount++;
  ms.innerHTML = msCount;
  if (msCount >= 100) {
    secCount++;
    sec.innerHTML = secCount;
    msCount = 0; //reset ms counter
    ms.innerHTML = 0;
  }
  if (secCount < 10) {
    sec.innerHTML = `0${secCount}`;
  }
  if (secCount >= 10) {
    sec.innerHTML = secCount;
  }
  if (secCount >= 60) {
    minCount++;
    min.innerHTML = `0${minCount}`;
    secCount = 0; //reset sec counter
    sec.innerHTML = `00`;
  }
  if (minCount < 10) {
    min.innerHTML = `0${minCount}`;
  }
  if (minCount > 10) {
    min.innerHTML = `${minCount}`;
  }
  if (minCount >= 60) {
    min.innerHTML = "60";
    sec.innerHTML = "00";
    ms.innerHTML = "00";
    return; // ask mordi if will work
  }
}

startBtn.addEventListener("click", function () {
  clearInterval(unit);
  let msToSec = 10;
  unit = setInterval(startTimer, msToSec);
});

stopBtn.addEventListener("click", function () {
  clearInterval(unit);
});

resetBtn.addEventListener("click", function () {
  clearInterval(unit);
  minCount = 0;
  secCount = 0;
  msCount = 0;
  min.innerHTML = "00";
  sec.innerHTML = "00";
  ms.innerHTML = "00";
});
