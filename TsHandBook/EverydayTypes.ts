let obj: any = { x: 0 };
// obj.foo();
// obj();
// obj.bar = 100;
// obj = 'hello';
// const n: number = obj;
// let myName: string = 'Alice';
// let myName_noType = 'Alice';

function geet(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}

function getFavoriteNumber(): number {
  return 26;
}

const names = ['Alice', 'Bob', 'Eve'];

names.forEach(function (s) {
  console.log(s.toUpperCase());
});

names.forEach((s) => {
  console.log(s.toUpperCase());
});

function printCoord(pt: { x: number; y: number }) {
  console.log('The coordinate x value is ' + pt.x);
  console.log('The coordinate y value is ' + pt.y);
}

printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  console.log('First: ' + obj.first.toUpperCase());

  if (obj.last !== undefined) {
    console.log('Last: ' + obj.last.toUpperCase());
  }

  console.log('Last: ' + obj.last?.toUpperCase());
}

printName({ first: 'Bob' });
printName({ first: 'Bob', last: 'Alisson' });

function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log('You ID is: ' + id.toUpperCase());
  } else {
    console.log('You ID is: ' + id);
  }
}

printId(101);
printId('202');

function welcomPeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('Hello, ' + x.join(' and '));
  } else {
    console.log('Welcom lone travaler ' + x);
  }
}

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

type Point = {
  x: number;
  y: number;
};

function printCoordAliases(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordAliases({ x: 100, y: 100 });

type UserInputSantitizedString = string;

function sanitizedInput(str: string): UserInputSantitizedString {
  return sanitize(str);
}

let userInput = sanitizedInput(getInput());
userInput = 'new input';

interface PointInterface {
  x: number;
  y: number;
}

function printCoordInterface(pt: PointInterface) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

interface AnimalInterface {
  name: string;
}

interface Bear extends AnimalInterface {
  honey: boolean;
}

function printText(s: string, alignment: 'left' | 'right' | 'center') {}

printText('Hello', 'left');
printText('Hello', '111');

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}

function configure(x: Options | 'auto') {}

configure({ width: 100 });
configure('auto');
configure('automatic');

declare function handleRequest(url: string, method: 'GET' | 'POST'): void;
const req = { url: 'hhtps://example.com', methode: 'GET' };
handleRequest(req.url, req.methode);

const req1 = { url: 'hhtps://example.com', methode: 'GET' as 'GET' };
handleRequest(req1.url, req1.methode);

const req2 = { url: 'hhtps://example.com', methode: 'GET' } as const;
handleRequest(req2.url, req2.methode);

function doSomething(x: string | null) {
  if (x === null) {
  } else {
    console.log('Hello, ' + x.toUpperCase());
  }
}

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}

const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n;

const firstName = Symbol('name');
const secondName = Symbol('name');
