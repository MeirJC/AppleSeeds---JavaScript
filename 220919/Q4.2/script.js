const prompt = require("prompt-sync")();
// activate the prompt

const gradeAssigner = function (grade) {
    if (grade <= 100 && grade >= 90){
        return "A"
    } else if (grade < 90 && grade >= 80){
        return "B"
    } else if (grade < 80  && grade >= 70){
        return "C"
    } else if (grade < 70  && grade >= 65){
        return "D"
    } else if (grade < 65  && grade >= 0) {
        return "F";
        //we could use only the else, it wasn't asked in the question.
        // but then we would get F also for input higher then 100 or lower then zero (if applied by mistake)
        // in that case we would get undefined since the function doesnt return anny value.
    }
}

let gradeByLetter = gradeAssigner((prompt("Enter a numerical grade to assign: ")) * 1);
console.log(`Grade: ${gradeByLetter}`);

