const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return (typeof sampleActivity === "string") &&
      !(+sampleActivity !== +sampleActivity) &&
      !(sampleActivity > MODERN_ACTIVITY) &&
      (parseFloat(sampleActivity) > 0) &&
      (Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (Math.LN2 / HALF_LIFE_PERIOD)));
};
