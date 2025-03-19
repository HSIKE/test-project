type Fn = (...args: any) => any;

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

interface User {
  name: string,
  age: number,
  sayName: () => string,
  sayAge: () => number,
}

type a = FunctionKeys<User>
