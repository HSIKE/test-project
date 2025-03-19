/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => (a - b));
  while (nums.length > 0) {
    const prev = nums.shift();
    const cur = nums.shift();
    if (prev === cur) continue;
    return prev;
  }
};


const sn = (nums) => nums.reduce((prev, cur) => {
  const res = prev ^ cur;
  return res;
})

// ^: XOR 异或运算， 满足交换律和结合律
// a ^ b ^ c === a ^ c ^ b
// a ^ a === 0;
// 0 ^ a === a;


console.log(sn([1, 4, 3, 2, 5, 1, 2, 3, 4]));
