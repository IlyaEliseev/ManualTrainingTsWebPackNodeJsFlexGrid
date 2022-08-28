//1. Generics

//1.1. Hello world generics
function identity1(arg: number): number {
  return arg;
}

function identity2(arg: any): any {
  return arg;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let output1 = identity<string>('1324');
let output2 = identity('232');

//1.2. Working with Generic type variables
function loggingIndentity<Type>(arg: Type): Type {
  console.log(arg.length);

  return arg;
}

function loggingIndentity1<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

//1.3. Generic types
let myIdentity1: <Type>(arg: Type) => Type = identity;
let myIdentity2: <Input>(arg: Input) => Input = identity;
let myIdentity3: { <Type>(arg: Type): Type } = identity;

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

interface GenericIdentityFn1<Type> {
  (arg: Type): Type;
}

let myIdentity4: GenericIdentityFn = identity;
let myIdentity5: GenericIdentityFn1<number> = identity;

//1.4. Generic classes
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber1 = new GenericNumber<number>();
myGenericNumber1.zeroValue = 0;
myGenericNumber1.add = function (x, y) {
  return x + y;
};

let myGenericString2 = new GenericNumber<string>();
myGenericString2.zeroValue = '';
myGenericString2.add = function (x, y) {
  return x + y;
};

console.log(myGenericString2.add(myGenericString2.zeroValue, '2314'));

//1.5. Generic constraints
interface Lengthwise {
  length: number;
}

function loggingIndentity3<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

loggingIndentity3(3);
loggingIndentity3({ value: 3, length: 10 });

//1.6. Using type parameters in generic constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a');
getProperty(x, 'm');

//1.7. Using class types in generics
function create<Type>(c: { new (): Type }): Type {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = 'Mikle';
}

class Animal {
  nametag: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

//2. The keyof type operator
type Point = { x: number; y: number };
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

//3. The typeof type operator
console.log(typeof 'hello world');

let s = 'hello';
let n: typeof s;

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
  return { x: 10, y: 3 };
}

type P1 = ReturnType<typeof f>;

declare const msgbox: () => boolean;
// let shouldContinue: typeof msgbox('12131');

//4. Index access types
type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];

type I1 = Person['age' | 'name'];
type I2 = Person[keyof Person];
type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person1 = typeof MyArray[number];
type Age1 = typeof MyArray[number]['age'];
type Age2 = Person1['age'];

const key = 'age';
type Age3 = Person[key];

type key = 'age';
type Age4 = Person[key];

//5. Conditional types
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw 'unimplemented';
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel1<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented';
}

let a = createLabel1('1234');
let b = createLabel1(1.2);
let c = createLabel1(Math.random() ? 'hello' : 12);

//5.1 Conditional type constraints
type MessageOf1<T extends { message: unknown }> = T['message'];

interface Email {
  message: string;
}

interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf1<Email>;

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;
type EmailMessageContents1 = MessageOf<Email>;
type DogMessageContents = MessageOf<Dog>;

type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>;
type Num = Flatten<number>;

//5.2. Inferring within conditional types
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

type Num1 = GetReturnType<() => number>;
type Str1 = GetReturnType<(x: string) => string>;
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

declare function stringOrNum(s: string): number;
declare function stingOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;

type T1 = ReturnType<typeof stringOrNum>;

//Destibutive conditional types
type ToArray<Type> = Type extends any ? Type[] : never;

type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNoDist<Type> = [Type] extends [any] ? Type[] : never;
type StrArrOrNumArr1 = ToArrayNoDist<string | number>;

//6. Mapped types
type Horse = {};

type OnlyBoolsAndHorse = {
  [key: string]: boolean | Horse;
};

const conforms: OnlyBoolsAndHorse = {
  del: true,
  rodney: false,
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

//6.1 Mapping modifiers
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;

//6.2 Key remapping via as
type MappedTypeWithNewProperties<Type> = {
  [Property in keyof Type as NewKeyType]: Type[Property];
};

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

interface Person12 {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

//6.3 Futher Exploration
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
  id: { format: 'incrementing' };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDRDeletion = ExtractPII<DBFields>;

//7. Template literal types
type World = 'world';

type Greeting = `hello ${World}`;

type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

type AllLocalIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = 'en' | 'ja' | 'pt';

type LocalMessageIDs = `${Lang}_${AllLocalIDs}`;

//7. String unions in types
const passedObject = {
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26,
};

type PropEventSourse<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSourse<Type>;

const person = makeWatchedObject({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26,
});

person.on('firstNameChanged', () => {});

//7.1 Intrinsic string manipulation types

type Greeting1 = 'hello world';
type ShoutyGreeting = Uppercase<Greeting>;

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
type MainID = ASCIICacheKey<'my_app'>;

type Greeting2 = 'Hello World';
type ShoutyGreeting1 = Lowercase<Greeting>;

type ASCIICacheKey1<Str extends string> = `ID-${Lowercase<Str>}`;
type MainID1 = ASCIICacheKey1<'MY_APP'>;

type LowercaseGreeting = 'hello world';
type Greeting3 = Capitalize<LowercaseGreeting>;

type LowercaseGreeting1 = 'HELLO WORLD';
type Greeting4 = Uncapitalize<LowercaseGreeting1>;
