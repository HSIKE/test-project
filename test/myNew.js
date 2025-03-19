function Test (name, age) {
  this.name = name;
  this.age = age;
}

const myNew = (fn, ...args) => {
  const obj = Object.create(fn.prototype);
  const res = fn.call(obj, ...args);
  console.log(res, obj);
  return typeof res === 'object' ? res : obj;
};

const myApply = (fn, newThis, ...args) => {
  const self = newThis || window || global;
  self.TEMP_METHOD = fn;
  const result = self.TEMP_METHOD(...args);
  delete self.TEMP_METHOD;
  return result;
};

function sayName() {
  console.log(this.name);
}

// myApply(sayName, new Test('test', 1));

const myBind = (fn, newThis) => (...args) => fn.call(newThis, ...args);

// myBind(sayName, new Test('Hello'))();


const myInstanceOf = (obj, fn) => {
  let proto = obj.__proto__;
  while (proto) {
   if (proto === fn.prototype) return true;
   proto = proto.__proto__;
  }
  return false;
}

// console.log(myInstanceOf(new Test('aaa'), Object));

const obj = new Test('Hello', 12);
// obj.__proto__ = null
// Object.defineProperty.call()
// console.log(obj.toString);

obj[Symbol.iterator] = () => Object.keys(obj)[Symbol.iterator]();

for (const val of obj) {
  console.log(val);
}
