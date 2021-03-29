const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(/* arr */) {let max = 1;
    for(let item of arguments[0]){
      if(Array.isArray(item)){
        let depth = 1 + this.calculateDepth(item);
        max = (max > depth) ? max : depth;
      }
    }
    return max;
  }
  }