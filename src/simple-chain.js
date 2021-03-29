const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array : [],
  getLength() {
    return this.array.length;
  },
  addLink(value = '') {
    this.array.push(value);
    return this;
  },
  removeLink(position) {
    if (!(position ^ 0 === position) || position < 1 || position > this.array.length) {
      this.array = [];
      throw new Error();
    }
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.map(a => `( ${a} )`).join('~~');
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
