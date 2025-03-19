/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let start = 1;
  let end = x;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(mid);
    if (mid === x / mid) return mid;
    if (mid > x / mid) {
      end = mid - 1;
      if (end <= x / end) return end;
    } else {
      start = mid + 1;
      if (start > x / start) return mid;
    }
  }
};

console.log(mySqrt(8));

const fib = (n) => {
  if (n <= 2) {
    return new Array(n).fill(1);
  }
  const arr = [1, 1];
  for (let i = 2; i <= n; i += 1) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
console.log(fib(5))
