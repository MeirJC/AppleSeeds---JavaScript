const checkBox = document.querySelector("#check");
const pic = document.querySelector("img");
//
checkBox.addEventListener("click", () => {
  if ((checkBox.checked = true)) {
    pic.style.display = "block";
  } else {
    pic.style.display = "none";
  }
});
