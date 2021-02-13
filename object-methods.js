// Create a calculator Task
let calculator = {
  read() {
    this.num1 = +prompt("first number?", 0);
    this.num2 = +prompt("second number?", 0);
  },
  sum() {
    return this.num1 + this.num2;
  },

  mul() {
    return this.num1 * this.num2;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
