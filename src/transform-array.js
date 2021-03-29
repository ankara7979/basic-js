const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  let arr = arguments[0];
  if(!Array.isArray(arr)) throw new TypeError('Argument should be an array');
  let marks = [];
  let result = {};
  const vars = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  for(let i = 0; i < arr.length; i++){
    if(vars.includes(arr[i])){
      marks.push({index: i, value: arr[i]});
    }else{
      result[i] = arr[i];
    }
  }
  
  for(mark of marks){
    if(mark.value === vars[0] && result[(mark.index + 1)] !== undefined) delete result[(mark.index + 1)];
    if(mark.value === vars[1] && result[(mark.index - 1)] !== undefined)  delete result[(mark.index - 1)];
    if(mark.value === vars[2] && result[(mark.index + 1)] !== undefined) result[mark.index] = result[mark.index + 1];
    if(mark.value === vars[3] && result[(mark.index - 1)] !== undefined) result[mark.index] = result[mark.index - 1];
  }

  return Object.values(result);
};
