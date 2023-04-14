const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(pos) {
    if(typeof pos !== "number" || pos < 1 || pos > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(pos - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(v => `( ${v} )`).join("~~");
    this.chain = [];
    return result;
  }
};

console.log(
    chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
)

module.exports = {
  chainMaker
};
