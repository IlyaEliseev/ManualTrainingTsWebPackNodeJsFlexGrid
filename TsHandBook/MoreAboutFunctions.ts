function greeter(fn: (a: string) => void) {
  fn('Hello');
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
}

type SomeObject = any;
type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn(ctor: SomeConstructor) {
  return new ctor('hello');
}

interface CallOrConsruct {
  new (s: string): Date;
  (n?: number): number;
}

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const s = firstElement(['a', 'b', 'c']);
const n = firstElement([1, 2, 3]);
const u = firstElement([]);

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(['1', '2', '3'], (n) => parseInt(n));

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longestString = longest('alice', 'bob');
// const notOk = longest(10, 100);

// function minimumLength<Type extends { lenght: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.lenght >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum };
//   }
// }

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine<string | number>([1, 2, 3], ['hello']);

function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

const a = firstElement1([1, 2, 3]);
const b = firstElement2([1, 2, 3]);

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

function greet1<Str extends string>(s: Str) {
  console.log('Hello' + s);
}
function greet2(s: string) {
  console.log('Hello' + s);
}
greet1('world');
greet2('world');

function f(n?: number) {}

f();
f(1);
f(undefined);

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimeStamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimeStamp, d);
  } else {
    return new Date(mOrTimeStamp);
  }
}

const d1 = makeDate(12345);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1);

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any[] | string) {
  return x.length;
}

len('');
len([0]);
len('sss');

const user = {
  id: 123,

  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

interface User {
  id: number;
  admin: boolean;
}

declare const getDB: () => DB;

interface DB {
  filtersUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admin = db.filtersUsers(function (this: User) {
  return this.admin;
});

function noop() {
  return;
}

function safeParse(s: string): unknown {
  return JSON.parse(s);
}

const obj = safeParse('string');

function fn1(x: string | number) {
  if (typeof x === 'string') {
  } else if (typeof x === 'number') {
  } else {
    x;
  }
}

function doSomething1(f: Function) {
  return f(1, 2, 3, 4);
}

function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

const a1 = multiply(10, 1, 2, 3, 4);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

const args = [8, 5] as const;
const angle = Math.atan2(...args);

type ABS = { a: number; b: number; c: number };

function sum({ a, b, c }: ABS) {
  return console.log(a + b + c);
}

sum({ a: 10, b: 3, c: 9 });

type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};

const v1 = f1();
const v2 = f2();
const v3 = f3();

const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));
