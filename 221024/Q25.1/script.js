// Instructions;
// 1. What is wrong with the code? explain in your own words
// the getStrength is not bound to the currect function scope.
// we need to bind it in order to invoke the getSterngth method
// with the correct values
//
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger
// function.
const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
whoIsStronger(hero.getStrength.bind(hero));
whoIsStronger(() => hero.getStrength.call(hero));
whoIsStronger(() => hero.getStrength.apply(hero));
