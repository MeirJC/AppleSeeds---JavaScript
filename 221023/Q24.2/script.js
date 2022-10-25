// You are given a function, Pokeman, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
//
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
//
// ● • A method called attack that takes one parameter,an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
//
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:
function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let piccachu = new Pokemon("Piccachu", "Electricity", [
  "Electric Shock",
  "Electric trick",
]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (num) {
  console.log(`${this.name} used ${this.attackList[num]}`);
};

piccachu.callPokemon();
piccachu.attack(0);
piccachu.attack(1);
