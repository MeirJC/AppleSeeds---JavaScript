const prompt = require("prompt-sync")();
// activate the prompt
console.log("Lets play 7-Boom");
let number = (prompt("Please enter a number: ") * 1);

for (let i =1; i < number + 1; i++) {
    if(i % 7 === 0 && i.toString().includes("7")){
        console.log("BOOM BOOM");
    }else if (i % 7 === 0) {
        console.log("BOOM");
    } else {
        console.log(i);
    }
}

