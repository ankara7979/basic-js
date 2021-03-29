const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members) &&
      !(members.length == 0) &&
      members.filter(member => typeof member === "string").map(element => element.trim().toUpperCase()[0]).sort().join('');
};

