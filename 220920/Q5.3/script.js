// Create a simple password validation function that takes a
// password string as an argument.
//     If the length of the password is more than 7 characters return
// “Strong”. If it is less than 7 characters long return “Weak
const isUpperCase = (word) => {
    for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91) {
            return true;
        }

    }
    return false;
}
// 1. Create a function that uses an if/else conditional
//     expression.
const passCheck1 = (password) => {
    if (password.length > 7){
        return "Strong";
    } else {
        return "Weak";
    }
}

// console.log(`${passCheck1("123ABCabc")}`); // Strong
// console.log(`${passCheck1("1234abcd")}`); // Strong
// console.log(`${passCheck1("1234ABCD")}`); // Strong
// console.log(`${passCheck1("123ABC")}`); // Weak
// console.log(`${passCheck1("123abc")}`); // Weak
// console.log(`${passCheck1("123")}`); // Weak

// 2. Create a function that uses a ternary conditional
// expression.
const passCheck2 = (password) => {
    return password.length > 7 ? "Strong" : "Weak";
}

// console.log(`${passCheck2("123ABCabc")}`); // Strong
// console.log(`${passCheck2("1234abcd")}`); // Strong
// console.log(`${passCheck2("1234ABCD")}`); // Strong
// console.log(`${passCheck2("123ABC")}`); // Weak
// console.log(`${passCheck2("123abc")}`); // Weak
// console.log(`${passCheck2("123")}`); // Weak

// 3. Create a function that uses a && logical operator.
const passCheck3 = (password) => {
    const isStrong = password.length >= 7 && "Strong";
    return isStrong === "Strong" ? isStrong : "Weak";
}

// console.log(`${passCheck3("123ABCabc")}`); // Strong
// console.log(`${passCheck3("1234abcd")}`); // Strong
// console.log(`${passCheck3("1234ABCD")}`); // Strong
// console.log(`${passCheck3("123ABC")}`); // Weak
// console.log(`${passCheck3("123abc")}`); // Weak
// console.log(`${passCheck3("123")}`); // Weak

// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
//     If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”. If the
// password length is only 7 characters long returns “Strong”.
// If the password length is less than 7 characters long return
// “Weak”

isUpperCase("12345678abcdefgABCDEFG");

const passCheck4 = (password) => {
    return password.length > 7 ? (isUpperCase(password)) ? "Very Strong" : "Strong" : "Weak";
}

// console.log(`${passCheck4("123ABCabc")}`); // Very Strong
// console.log(`${passCheck4("1234abcd")}`); // Strong
// console.log(`${passCheck4("1234ABCD")}`); // Very Strong
// console.log(`${passCheck4("123ABC")}`); // Weak
// console.log(`${passCheck4("123abc")}`); // Weak
// console.log(`${passCheck4("123")}`); // Weak