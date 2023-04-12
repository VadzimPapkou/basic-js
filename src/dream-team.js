const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  members = [...members];

  return members
    .filter(member => typeof member === "string")
    .map(member => member.trim().toUpperCase())
    .sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
    .map(member => member[0])
    .join("");
}

module.exports = {
  createDreamTeam
};
