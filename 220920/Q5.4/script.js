// Create a function that receives one argument, a string color.
//     Create a switch statement that:
//     1. If the color is yellow, pink, or orange return from the
// function “light color”.
//     2. If the color is a blue, purple, or brown return from the
// function “dark color”.
//     3. If the color is none of the above return “Unknown color”.
//     Note:
//         It shouldn’t be case-sensitive

const colorChecker = (color) => {
    let colorLowerCase = color.toLowerCase();
    switch (colorLowerCase) {
        case "yellow":
        case "pink":
        case "orange":
            return "Light Color";
        case "blue":
        case "purple":
        case "brown":
            return "Dark Color";
        default:
            return "Unknown Color";
    }
    // no need to add break statement inside the switch
    // return is returning the value and end function running.
}

console.log(colorChecker("YelLOW")); //Light Color
console.log(colorChecker("PINk")); //Light Color
console.log(colorChecker("oRAnGE")); //Light Color
console.log(colorChecker("BluE")); //Dark Color
console.log(colorChecker("purple")); //Dark Color
console.log(colorChecker("BROWN")); //Dark Color
console.log(colorChecker("green")); //Unknown Color
console.log(colorChecker(5)); //Unknown Color
