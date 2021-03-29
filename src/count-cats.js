const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return  matrix.length !== 0 && matrix.reduce((acc, rec) => acc.concat(rec)).filter(val => val === '^^').length;
};
