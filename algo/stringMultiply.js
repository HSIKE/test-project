// 43. 字符串相乘
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
//
// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

import { stringAdd } from './stringAdd';

var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  let result = '';
  const len1 = num1.length;
  const len2 = num2.length;

  for (let i = len1 - 1; i >= 0; i -= 1) {
    let tempResult = '';
    let add = 0;
    for (let j = len2 - 1; j >= 0; j -= 1) {
      const curResult = Number(num1[i]) * Number(num2[j]) + add;
      add = Math.floor(curResult / 10);
      tempResult = String(curResult % 10) + tempResult;
    }
    if (add > 0) {
      tempResult = String(add) + tempResult;
    }
    tempResult = tempResult + '0'.repeat(len1 - 1 - i);
    result = stringAdd(result, tempResult);
  }
  return result;
};
