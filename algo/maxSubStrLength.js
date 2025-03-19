const maxSubStr = (str) => {
  const map = new Map();
  let result = 0;
  let startIndex = 0;
  for (let i = 0; i < str.length; i += 1) {
    const cur = str[i];
    if (map.has(cur)) {
      startIndex = Math.max(map.get(cur) + 1, startIndex);
    } else {
      map.set(cur, i);
    }
    result = Math.max(result, i - startIndex + 1);
  }
  return result;
};

maxSubStr('abcabcbb');
