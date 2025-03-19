// 6. Z 字形变换
// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
//
// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
//
// 请你实现这个将字符串进行指定行数变换的函数：
//
// string convert(string s, int numRows);


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2 || numRows > s.length) return s;
  let result = '';
  const trip = 2 * (numRows - 1);
  for (let row = 0; row < numRows; row += 1) {
    let index = row;
    while (index < s.length) {
      console.log(index);
      result += s[index];
      index += trip;
      if (row > 0 && (row < numRows - 1)) {
        const anotherIndex = index - 2 * row;
        if (anotherIndex < s.length) {
          result += s[anotherIndex];
        }
      }
    }
  }
  return result;
};

convert('A', 1);
