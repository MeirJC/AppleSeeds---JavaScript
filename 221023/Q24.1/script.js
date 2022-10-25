function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

let someSquare = new Square(2, 2, 2, 2);

Square.prototype.isSquare = function () {
  if (this.a === this.c && this.b === this.d && this.a === this.b) {
    return true;
  }
  return false;
};

console.log(someSquare.isSquare());
