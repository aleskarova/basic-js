const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },
  addLink(value = "") {
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position <= 0 || position > this.values.length) {
      this.values = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.values.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    const chain = this.values.map((value) => `( ${value} )`).join("~~");
    this.values = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
