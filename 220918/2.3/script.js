const PI = 3.14159265359;

function circleArea(radius) {
    return "Area: " + (PI*(radius**2)) + "\n" +"Area rounded to 2 decimal places: " + (PI*(radius**2)).toFixed(2);
}
let userRadius = 5
console.log(circleArea(userRadius));