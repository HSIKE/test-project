// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。
//
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  let result = ''

  const func = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left -= 1;
      right += 1;
    }
    if (right - left - 1 > result.length) {
      result = s.slice(left + 1, right);
    }
  }
  for (let i = 0; i < s.length; i += 1) {
    func(i, i);
    func(i, i + 1);
  }
  return result;
};
