/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(str);
  if (str.length <= 1) return true;
  let start = 0;
  let end = s.length - 1;
  let result = true;
  while (start <= end) {
    if (str[start] !== str[end]) {
      result = false;
      break;
    }
    start += 1;
    end -= 1;
  }
  return result;
};

isPalindrome('abc d   234  -dcb/a');
