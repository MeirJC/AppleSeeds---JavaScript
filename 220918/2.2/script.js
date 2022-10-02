function tellFortune (jobTitle, location, partnerName, numberOfChildren) {
    return "You will be a " + jobTitle + " in " + location + " married to " + partnerName + " with " + numberOfChildren + " children.";
}

let job = "Developer";
let location = "Afula";
let partner = "Shani";
let chilrenNum = 2;

console.log(tellFortune(job,location,partner,chilrenNum));
