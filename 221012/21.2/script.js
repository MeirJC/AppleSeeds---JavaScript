// Instructions
// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
//   Limit the font size to be between 6px and 100px.
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const pText = document.querySelector("#pText");
let size = 16;
pText.style.fontSize = `${size}px`;
pText.innerText = `Text Size: ${size}`

minus.addEventListener('click',()=>{
 if (size > 6){
   size -= 2;
   pText.style.fontSize = `${size}px`
   pText.innerText = `Text Size: ${size}`
 }
})
plus.addEventListener('click',()=>{
 if (size < 100){
   size += 2;
   pText.style.fontSize = `${size}px`
   pText.innerText = `Text Size: ${size}`
 }
})