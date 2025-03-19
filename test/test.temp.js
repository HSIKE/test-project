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
  const grandTypes = ['祖父', '祖母'];
  const parentTypes = ['父亲', '母亲'];
  const map = {};

  const [first, ...queue] = [...input_list];
  map[first.left] = 0;
  const getRightIdByLeft = (leftId, relation) => {
    if (grandTypes.includes(relation)) return leftId + 2;
    if (parentTypes.includes(relation)) return leftId + 1;
    return leftId;
  }
  const getLeftIdByRight = (rightId, relation) => {
    if (grandTypes.includes(relation)) return rightId - 2;
    if (parentTypes.includes(relation)) return rightId - 1;
    return rightId;
  };
  map[first.right] = getRightIdByLeft(0, first.relation);

  let count = 0;
  while (queue.length > 0) {
    count ++;
    const ele = queue.shift();
    const { left, right, relation } = ele;
    const leftId = map[left];
    const rightId = map[right];
    if (leftId !== undefined) {
      if (rightId === undefined) {
        map[right] = getRightIdByLeft(leftId, relation);
      }
      continue;
    }
    if (rightId !== undefined) {
      map[left] = getLeftIdByRight(rightId, relation);
      continue;
    }
    console.log(ele, map);
    queue.push(ele);
  }

  console.log(count);
  return Object.entries(map).sort(([, id1], [, id2]) => (id1 - id2)).map(([name]) => (name));
}


const input_list = [
  new Relation('张三', '李四', '配偶'),
  new Relation('张太爷', '张小民', '祖父'),
  new Relation('张太爷', '张三', '父亲'),
  new Relation('张三', '张麻子', '父亲'),
  new Relation('张三', '张二狗', '祖父'),
];

console.log(input_list)

const r = fun(input_list);

console.log("family generations:");
console.log(r);

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = function(nums, val) {
  let k = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== val){
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

const arr = [1, 2, 3, 3, 4, 2, 1]
console.log(removeElement(arr, 2), arr);
