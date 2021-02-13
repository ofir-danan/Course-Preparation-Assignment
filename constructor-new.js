//Create new Calculator Task
function Calculator() {
  this.read = function () {
    this.num1 = +prompt("first number?", 0);
    this.num2 = +prompt("second number?", 0);
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//Create new Accumulator Task
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.num1 = +prompt("Your number?", 0);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values
