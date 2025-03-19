/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (divisor === 1) return dividend;
  if (divisor === -1) return -dividend;
  if (dividend === 0) return 0;
  let result = 0;
  let isNegative = true;
  if (
    (dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)
  ) {
    isNegative = false;
  }

  let target = Math.abs(dividend);
  const mod = Math.abs(divisor);
  while (target >= mod) {
    target -= mod;
    result += 1;
  }
  return isNegative ? -result : result;
};

console.log(divide(- 2147483648, - 1));
