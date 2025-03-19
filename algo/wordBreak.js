/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let str = s;
  for (let i = 0; i < wordDict.length; i += 1) {
    str = str.split(wordDict[i]).join('1');
  }
  console.log(str);
  str = str.replace('1', '');
  console.log(str);
  return !str;
};

// console.log(wordBreak('applepenapple', ['apple', 'pen']));


Function.prototype.myCall = function (obj, ...args) {
  const self = this;
  const _this = obj || window;
  _this.TEMP_FUNC = self;
  const result = _this.TEMP_FUNC(...args);
  delete _this.TEMP_FUNC;
  return result;
}

module.exports.test = 3;

const obj = {
  test: 4,
};

function fn() {
  console.log(this.test);
}
fn();
fn.myCall(obj);
