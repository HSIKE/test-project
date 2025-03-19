type MyPick<T, UnionType extends keyof T> = {
  [K in UnionType]: T[K]
}

interface Obj {
  a: string,
  b: string,
  c: boolean,
  d: number,
}
type U = 'a' | 'c';



type Test = MyPick<Obj, U>;

const obj: Test = {
  a: '123',
  c: false,
}
