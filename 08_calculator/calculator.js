const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce(add, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1);
};

const power = function(base, exp) {
	return multiply(Array(exp).fill(base));
};

const factorial = function(num) {
  let a = 0;
  const array = Array(num).fill(1).map(() => ++a);
  return multiply(array);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
