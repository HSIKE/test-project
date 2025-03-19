function reverseFibonacciSum(n) {
  // code here

  const genFib = (n) => {
    if (n <= 0) {
      throw new Error('');
    }
    if (n <= 2) {
      const arr = new Array(n);
      arr.fill(1);
      return arr;
    }
    const result = [1, 1];
    let index = 2;
    while (index < n) {
      result.push(result[index - 1] + result[index - 2]);
      index += 1;
    }
    return result;
  };
  const fib = genFib(n);
  const sum = fib.reduce((prev, cur) => (prev + cur), 0);
  const reverse = (num) => {
    let _num = num;
    const arr = [];
    while (_num > 0) {
      const mod = _num % 10;
      arr.push(mod);
      _num = Math.floor(_num / 10);
    }
    let result = 0;
    const length = arr.length;
    arr.forEach((item, index) => {
      result += item * Math.pow(10, length - 1 - index);
    });
    return result;
  };
  // const reverse = (num) => {
  //   let result = 0;
  //   let _num = num;
  //   while (_num > 0) {
  //     result = result * 10 + (_num % 10);
  //     _num = Math.floor(_num / 10);
  //   }
  //   return result;
  // };
  return reverse(sum);
}

// console.log(reverseFibonacciSum(process.env.NUM));

function isSorted(array) {
  // code here
  if (array?.length <= 1) {
    throw new Error('')
  }
  const copy = [...array];
  let result = 1;
  let temp = copy.shift();
  let flag = true;
  while (copy.length > 0) {
    const firstEle = copy.shift();
    if (firstEle === temp) {
      continue;
    }
    const current = firstEle > temp ? 1 : -1;
    temp = firstEle;
    if (flag) {
      flag = false;
      result = current;
      continue;
      // 没有接到电话。。。再打一下试试？我能回拨回去吗？可能是运营商拦截了
      // 你有收到短信么
      // 遇忙未接， 要不试试 15317743346， 另一个号码
    }
    if (result !== current) {
      result = 0;
      break;
    }
  }
  return result;
}

// console.log(isSorted([1, 1, 2, 3, 4, 3]));

function isValid(string) {
  // code here
  if (!string || (string.length % 2)) return false;
  const queue = [];

  const left = ['(', '[', '{'];
  for (const letter of string) {
    if (left.includes(letter)) {
      queue.push(letter);
    } else {
      const last = queue.pop();
      if (letter === '(' && last !== ')') return false;
      if (letter === '[' && last !== ']') return false;
      if (letter === '{' && last !== '}') return false;
    }
  }
  return true;
}

// console.log(isValid('[]()'))
// console.log(isValid('[]()}'))
// console.log(isValid('{[]()}'))




class Relation {
  constructor(left, right, relation) {
    this.left = left;
    this.right = right;
    this.relation = relation;
  }
}


// # 输入
// [
//     Relation('张三', '李四', '配偶'),
//     Relation('张太爷', '张小民', '祖父'),
//     Relation('张太爷', '张三', '父亲')
// ]



// # 输出
// [
//     ['张太爷'],
//     ['张三', '李四'],
//     ['张小民']
// ]


function fun(input_list) {
  const grandType = ['祖父', '祖母'];
  const parentType = ['父亲', '母亲'];

}


const input_list = [
  new Relation('张三', '李四', '配偶'),
  new Relation('张太爷', '张小民', '祖父'),
  new Relation('张太爷', '张三', '父亲')
];

console.log(input_list)

const r = fun(input_list);

console.log("family generations:");
console.log(r);

