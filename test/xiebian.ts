class Animal {
  say(): void {
    console.log('I am an animal.');
  }
}

class Dog extends Animal {
  bark(): void {
    console.log('Wang.');
  }
}

class Cat extends Animal {
  meow(): void {
    console.log('Meow.');
  }
}

const doSth = (animal: Animal) => {
  animal.say();
}

// doSth(new Dog());

interface I1 {
  a: boolean,
  b: number,
  readonly c: string,
  readonly d: string,
}

type Writable<T> = {
  -readonly [K in keyof T]: T[K];
}[keyof T]

type I2 = Writable<I1>;

const v: I2 = {
  c: 'fff',
}
console.log(v);

export default doSth;
