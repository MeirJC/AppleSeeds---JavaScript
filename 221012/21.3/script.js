const userTextLength = document.querySelector("textarea");
const submitButton = document.querySelector("input[value=Submit]");
const errorMessage = document.querySelector("#error");
errorMessage.style.color = "transparent"

submitButton.addEventListener('click',()=>{
  if (userTextLength.value.length< 100){
    errorMessage.innerHTML = "Minimum input length is 100 charecters"
    errorMessage.style.color = "crimson"
    console.log("aaaaaaaaaa")
  } else {
    errorMessage.innerHTML = "Submitted Successfully"
    errorMessage.style.color = "#007200"
    console.log("bbbbbbbbbbbbbbb")
  }
})