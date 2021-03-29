const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let array = [];
  let i = 0;
  str = '' + str;
  let additionString = '';
  if (!(options.addition === undefined)) {
    additionString = repeater(options.addition, {repeatTimes : options.additionRepeatTimes, separator : options.additionSeparator === undefined ? '|' : options.additionSeparator});
  }
  do {
    array.push(str + additionString);
    i++
  } while (i < options.repeatTimes)
  return array.join(options.separator === undefined ? '+' : options.separator);
};
  