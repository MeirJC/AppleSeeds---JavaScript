// For each of the questions below, answer the questions with this array:
//
// const people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all
// of the people.
// 2. Write the command to remove "Greg" from the array.
// 3. Write the command to remove "James" from the array.
// 4. Write the command to add "Matt" to the front of the array.
// 5. Write the command to add your name to the end of the
// array.
// 6. Using a loop, iterate through this array, and after
// console.log "Mary", exit from the loop.
// 7. Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt".
// 8. Write the command that gives the indexOf where "Mary"
// is located.
// 9. Write the command that gives the indexOf where "Foo" is
// located (this should return -1).
// 10. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" fromthe array and add "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
//     "James"].
// 11. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob"

const people = ["Greg", "Mary", "Devon", "James"];

// 1. Using a loop, iterate through this array and console.log all
// of the people.
for (let i = 0;i<people.length;i++) {
    console.log(people[i]);
}
// 2. Write the command to remove "Greg" from the array.
people.splice(people.indexOf("Greg"),1);
console.log(people);

// 3. Write the command to remove "James" from the array.
people.splice(people.indexOf("James"),1);
console.log(people);

// 4. Write the command to add "Matt" to the front of the array.
people.splice(0,0,"Matt");
console.log(people);

// 5. Write the command to add your name to the end of the
// array.
people.splice(people.length,0,"Meir");
console.log(people);

// 6. Using a loop, iterate through this array, and after
// console.log "Mary", exit from the loop.
for (let i = 0; i<people.length; i++) {
    console.log(people[i]);
    if(people[i]==="Mary"){break;}
}

// 7. Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt".
const newPepole = people.slice(2);
console.log(newPepole);
console.log(people);

// 8. Write the command that gives the indexOf where "Mary"
// is located.
console.log(people.indexOf("Mary"));

// 9. Write the command that gives the indexOf where "Foo" is
// located (this should return -1).
console.log(people.indexOf("Foo"));

// 10. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" fromthe array and add "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie","James"].
console.log(people);
people.splice(0,people.length,"Greg", "Mary", "Devon", "James");
console.log(people);
people.splice(people.indexOf("Devon"),2,"Elizabeth", "Artie","James");
console.log(people);

// 11. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob"
const withBob = people.concat("Bob");
console.log(withBob);
