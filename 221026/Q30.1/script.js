// HTML Page elements
const userInput = document.querySelector("#userInput");
const btn = document.querySelector("#btn");
const main = document.querySelector("#main-container");
let dataObj = {};
// Containing recent cards (to not repeat)
let history = [];
// Set UserCard
function setCard(data) {
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardContent = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const a = document.createElement("a");
  card.classList.add("card");
  cardImage.src = data.avatar;
  h3.textContent = data.userName;
  p.textContent = `Total Repositories: ${data.numOfRepos}`;
  a.href = data.address;
  a.target = "_blank";
  a.textContent = `${data.userName}'s Github`;
  card.appendChild(cardImage);
  // cardImage.style.width = "100%";
  cardContent.appendChild(h3);
  cardContent.appendChild(p);
  cardContent.appendChild(a);
  card.appendChild(cardContent);
  main.appendChild(card);
}
// Fetch from API
// https://api.github.com/users/{username}
async function getUserFromApi() {
  try {
    const input = userInput.value;
    const response = await fetch(`https://api.github.com/users/${input}`);
    const data = await response.json();
    dataObj = {
      avatar: data.avatar_url,
      userName: data.login,
      numOfRepos: data.public_repos,
      address: data.html_url,
    };
    if (!history.includes(dataObj.userName)) {
      history.push(dataObj.userName);
      setCard(dataObj);
      return dataObj;
    }
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", () => {
  getUserFromApi();
  userInput.value = "";
});
window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    btn.click();
    // getUserFromApi();
    // userInput.value = "";
  }
});

// -------------------------------------------------------------
//card format:
// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="cardContent">
//     <h4><b>User Name</b></h4>
//     <p>Num of repos</p>
//     <a>link</a>
//   </div>
// </div>
// -------------------------------------------------------------
