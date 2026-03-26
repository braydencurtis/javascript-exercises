const convertToCelsius = function(temp) {
  const tempInCelsius = (temp - 32) * (5/9);
  return Math.round(tempInCelsius * 10) / 10;
}

const convertToFahrenheit = function(temp) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
