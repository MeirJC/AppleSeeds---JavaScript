let redPlayer = document.querySelector("#player1-race>.active");
let redPlayerCounter = 0;
let yellowPlayer = document.querySelector("#player2-race>.active");
let yellowPlayerCounter = 0;
let isWinner = false;
//Keys to play: "A" for red , "L" for yellow
//------------------------------------------------------------------
//win message
const winMessageDiv = document.querySelector("#winMessageDiv");
const winMessage = document.querySelector("#winMessage");
const resetGame = document.querySelector("#resetGame");

//------------------------------------------------------------------
window.addEventListener("keyup", (e) => {
  if (e.key === "a") {
    moveNext("red");
  } else if (e.key === "l") {
    moveNext("yellow");
  }
});

resetGame.addEventListener("click", () => {
  winMessageDiv.style.display = "none";
  redPlayerCounter = 0;
  yellowPlayerCounter = 0;
  isWinner = false;
  redPlayer.classList.remove("active");
  document
    .querySelector("#player1-race")
    .firstElementChild.classList.add("active");
  redPlayer = document.querySelector("#player1-race>.active");
  yellowPlayer.classList.remove("active");
  document
    .querySelector("#player2-race")
    .firstElementChild.classList.add("active");
  yellowPlayer = document.querySelector("#player2-race>.active");
});

function moveNext(player) {
  if (player === "red") {
    if (redPlayerCounter < 11 && !isWinner) {
      redPlayerCounter++;
      redPlayer.nextElementSibling.classList.add("active");
      redPlayer.classList.remove("active");
      redPlayer = document.querySelector("#player1-race>.active");
    } else {
      isWinner = true;
      announceWinner("Red");
      winMessage.style.color = "crimson";
      winMessageDiv.style.backgroundColor = "#eeeeee";
    }
  }
  if (player === "yellow") {
    if (yellowPlayerCounter < 11 && !isWinner) {
      yellowPlayerCounter++;
      yellowPlayer.nextElementSibling.classList.add("active");
      yellowPlayer.classList.remove("active");
      yellowPlayer = document.querySelector("#player2-race>.active");
    } else {
      isWinner = true;
      announceWinner("Yellow");
      winMessage.style.color = "gold";
      winMessageDiv.style.backgroundColor = "#444444";
    }
  }
}

function announceWinner(player) {
  winMessageDiv.style.display = "block";

  winMessage.innerHTML = `${player} Player Wins the race!!!`;
}
