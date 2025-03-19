/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;

  const len = s.length;
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  for (let i = len - 1; i >= 0; i -= 1) {
    const next = map[s[i + 1]] || 0;
    const cur = map[s[i]];
    if (cur < next) {
      result -= cur;
    } else {
      result += cur;
    }
  }
  return result;
};

romanToInt('III')
