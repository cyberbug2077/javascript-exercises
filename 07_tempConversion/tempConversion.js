const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return roundToOneDecimal(celsius);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * 9 / 5 + 32;
  return roundToOneDecimal(fahrenheit);
};

const roundToOneDecimal = function(temp) {
  if (temp % 1 === 0) {
    return temp;
  }
  return +temp.toFixed(1);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
