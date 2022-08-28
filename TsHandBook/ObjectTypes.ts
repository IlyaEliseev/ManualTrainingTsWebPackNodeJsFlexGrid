function greet(person: { name: string; age: number }) {
  return 'Hello' + person.name;
}

interface Person {
  name: string;
  age: number;
}

function greetInterface(person: Person) {
  return 'Hello' + person.name;
}

type PersonT = {
  name: string;
  age: number;
};

function greetTypes(person: PersonT) {
  return 'Hello' + person.name;
}

//Optional properties
interface Shape {}
declare function getShape(): Shape;

interface PainOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}

function paintShape(opt: PainOptions) {
  let xPos = opt.xPos === undefined ? 0 : opt.xPos;
  let yPos = opt.yPos === undefined ? 0 : opt.yPos;
}

const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });

//Readonly properties
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  console.log(`prop has the value '${obj.prop}'.`);
  //   obj.prop = 'hello';
}

interface Home {
  readonly resident: { name: string; age: number };
}

function visitForBirthday(home: Home) {
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}

// function evict(home: Home) {
//   home.resident = {
//     name: 'Victor the Evictor',
//     age: 42,
//   };
// }

interface ReadOnlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: 'Person McPersonface',
  age: 42,
};

let readonlyPerson: ReadOnlyPerson = writablePerson;

console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);

//Index signature
declare function getStringArray(): StringArray;

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];

interface NumberDictionary {
  [index: string]: number | string;

  length: number;
  name: string;
}

declare function getReadOnlyStringArray(): ReadonlyStringArray;

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray1: ReadonlyStringArray = getReadOnlyStringArray();
myArray1[2] = 'Mallory';

//Extending Types
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
  color: 'red',
  radius: 42,
};

//Intersection Types
type ColorfulCircle1 = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

draw({ color: 'red', radius: 42 });

//Generic object types

interface BoxAny {
  contents: any;
}

interface BoxUnknown {
  contents: unknown;
}

let x: BoxUnknown = {
  contents: 'hello world',
};

if (typeof x.contents === 'string') {
  console.log(x.contents.toLowerCase());
}

console.log((x.contents as string).toLowerCase());

interface NumberBox {
  contents: number;
}

interface StringBox {
  contents: string;
}

interface BooleanBox {
  contents: boolean;
}

function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContent: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}

interface Box<Type> {
  contents: Type;
}

let box: Box<string>;

let boxA: Box<string> = { contents: 'hello' };
boxA.contents;

let boxB: StringBox = { contents: 'world' };
boxB.contents;

function setContents1<Type>(box: Box<Type>, newContents: Type) {
  box.contents = newContents;
}

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;

type OneOrManyOrNullString = OneOrManyOrNull<string>;

//The Array type

function doSomethingArray(value: Array<string>) {}

let myArray2: string[] = ['hello', 'world'];

doSomethingArray(myArray2);
doSomethingArray(new Array('hello', 'world'));

//ReadonlyArray type
function doStuff(value: ReadonlyArray<string>) {
  const copy = value.slice();
  console.log(`The first value is ${value[0]}`);
  value.push('1');
}

const roArray: ReadonlyArray<string> = ['1', '2', '3'];

let x1: readonly string[] = [];
let y1: string[] = [];

x1 = y1;
y1 = x1;

//Tuple types
type StringNumberPair = [string, number];

function doSomethingTuple(pair: [string, number]) {
  const a = pair[0];
  const b = pair[1];
}

doSomethingTuple('hello', 12);

function doSomethingTupleDestruct(pair: [string, number]) {
  const [inputString, hash] = pair;
  console.log(inputString);
  console.log(hash);
}

type Either2Or3 = [number, number, number?];

function setCoordinate(coord: Either2Or3) {
  const [x, y, z] = coord;
  console.log(`Provided coordinates had ${coord.length} dimensions`);
}

type StringNumberBoolean = [string, number, ...boolean[]];
type StringBooleanNumber = [string, ...boolean[], number];
type BooleanStringNumber = [...boolean[], string, number];

const a: StringNumberBoolean = ['123', 1];
const b: StringNumberBoolean = ['123', 1, true];
const c: StringNumberBoolean = ['123', 1, true, false, true, false];

function readButtonInput(...args: StringNumberBoolean) {
  const [name, version, ...input] = args;
}

//Readonly tuple types
function readonlyTuple(pair: readonly [string, number]) {
  pair[0] = '45';
}

let point = [3, 4] as const;

function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}

distanceFromOrigin(point);
