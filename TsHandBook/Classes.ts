// Class members
class P {}

// Fields
class Point {
  x: number;
  y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

class PointInit {
  x = 0;
  y = 0;
}

const ptInit = new PointInit();
console.log(`${pt.x}, ${pt.y}`);

class Greeter {
  name: string;

  constructor() {
    this.name = 'hello';
  }
}

class Greeter1 {
  readonly name: string = 'world';

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    this.name = 'not ok';
  }
}

const g = new Greeter1();
g.name = 'also not ok';

//Constructors
class Point1 {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Point2 {
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {}
}

//Super calls
class Base {
  k = 4;
}

class Derived extends Base {
  constructor() {
    super();
    console.log(this.k);
  }
}

//Methods
class Point3 {
  x = 10;
  y = 10;

  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}

const pt1 = new Point3();
pt1.scale(10);

let x: number = 0;

class C {
  x: string = 'hello';

  m() {
    x = 'world';
  }
}

//Getters and setters
class C1 {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

class Thing {
  _size = 0;

  get size(): number {
    return this._size;
  }

  set size(value: string | number | boolean) {
    let num = Number(value);

    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }

    this._size = num;
  }
}

const t = new Thing();
t.size = true;

//Index signature
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}

//Class Heritage
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  ping(): void {
    console.log('ping!');
  }
}

interface Checkable {
  check(name: string): boolean;
}

class NameCheck implements Checkable {
  check(name) {
    return name.toLowerCase() === 'ok';
  }
}

interface A {
  x: number;
  y?: number;
}

class C3 implements A {
  x = 0;
}

const c = new C3();
c.y = 10;

class Animal {
  move() {
    console.log('Moving along!');
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const d = new Dog();
d.move();
d.woof(10);

class Base1 {
  greet() {
    console.log('hello world');
  }
}

class Derived1 extends Base1 {
  greet(name?: string): void {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}

const d1 = new Derived1();
d1.greet();
d1.greet('reader');

interface Animal1 {
  dateOfBirth: any;
}

interface Dog1 extends Animal1 {
  breed: any;
}

class AnimalHouse {
  resident: Animal1;
  constructor(animal: Animal1) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  declare resident: Dog1;
  constructor(dog: Dog1) {
    super(dog);
  }
}

class Base2 {
  name = 'base';
  constructor() {
    console.log('My name is ' + this.name);
  }
}

class Derived2 extends Base2 {
  name = 'derived';
}

const d2 = new Derived2();

class MsgError extends Error {
  constructor(m: string) {
    super(m);

    Object.setPrototypeOf(this, MsgError.prototype);
  }

  sayHello() {
    return 'Hello ' + this.message;
  }
}

//Member visibility
class GreeterPublic {
  public greet() {
    console.log('123');
  }
}

const gp = new GreeterPublic();
gp.greet();

class GreeterProtected {
  public greet() {
    console.log('123');
  }
  protected getName() {
    return '22';
  }
}

const gpr = new GreeterProtected();
gpr.greet();
gpr.getName();

class BaseProtected {
  protected m = 10;
}

class Derived3 extends BaseProtected {
  m = 15;
}

const d3 = new Derived3();
console.log(d3.m);

class Base3 {
  protected x: number = 1;
}
class Derived4 extends Base3 {
  protected x: number = 5;
}
class Derived5 extends Base3 {
  f1(other: Derived5) {
    other.x = 15;
  }
  f2(other: Base3) {
    other.x = 15;
  }
}

class BasePrivate {
  private x = 0;
}

const b = new BasePrivate();
b.x;

class Derived6 extends BasePrivate {
  x = 1;
  showX() {
    console.log(this.x);
  }
}

class A {
  private x1 = 10;

  public sameAs(other: A) {
    return other.x1;
  }
}

class MySafe {
  private secretKey = 12345;
}

const s = new MySafe();
console.log(s['secretKey']);

//Static members
class MyClass1 {
  private static x = 0;
  static printX() {
    console.log(MyClass1.x);
  }
}

console.log(MyClass1.x);
MyClass1.printX();

class BaseStatic {
  static getGreeting() {
    return 'Hello world';
  }
}

class DerivedStatic extends BaseStatic {
  myGreeting = DerivedStatic.getGreeting();
}

class MyStaticClass {
  static doSomething() {}
}

function doSomething() {}

const MyHelperObject = {
  doSomething() {},
};

MyHelperObject.doSomething();

declare function loadLastInstances(): any[];
class Foo {
  static #count = 0;

  get count() {
    return Foo.#count;
  }

  static {
    try {
      const lastInstanse = loadLastInstances();
      Foo.#count += lastInstanse.length;
    } catch {}
  }
}

//Generic classes

class Box<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
}

const b1 = new Box('123');

//this at runtime in classes
class MyClassThis {
  name = 'MyClass';
  getName() {
    return this.name;
  }
}

const mt = new MyClassThis();
const obj = {
  name: 'obj',
  getName: mt.getName,
};
console.log(obj.getName());

class MyClass2 {
  name = 'MyClass';
  getName = () => {
    return this.name;
  };
}
const c1 = new MyClass2();
const g1 = c1.getName;
console.log(g1());

//this types
class Box4 {
  content: string = '';
  set(value: string) {
    this.content = value;
    return this;
  }
}

class ClearableBox extends Box4 {
  clear() {
    this.content = '';
  }
}

const a = new ClearableBox();
const b2 = a.set('132');

class Box3 {
  content: string = '';
  sameAs(other: this) {
    return other.content === this.content;
  }
}

class DerivedBox extends Box3 {
  otherContent: string = '?';
}

const base = new Box3();
const derived = new DerivedBox();
derived.sameAs(base);

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}

class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[];
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo');

if (fso.isFile()) {
  fso.content;
} else if (fso.isDirectory()) {
  fso.children;
} else if (fso.isNetworked()) {
  fso.host;
}

class Box1<T> {
  value?: T;

  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}

const box = new Box1();
box.value = 'Gameboy';

box.value;

if (box.hasValue()) {
  box.value;
}

//Parameters properties
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {}
}

const a1 = new Params(1, 2, 3);

console.log(a1.x);

//Class expressions
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const m = new someClass('214');
m.content;

//Abstract classes and Members
abstract class BaseAbstract {
  abstract getName(): string;

  printName() {
    console.log('Hello ' + this.getName());
  }
}

class Derived7 extends BaseAbstract {
  getName(): string {
    return 'world';
  }
}

const d7 = new Derived7();
d7.printName();

function greet2(ctor: new () => BaseAbstract) {
  const instance = new ctor();
  instance.printName;
}

greet2(Derived7);

//Relationships between classes

class Point4 {
  x = 0;
  y = 0;
}

class Point5 {
  x = 0;
  y = 0;
}

const p: Point4 = new Point5();

class Employee {
  name: string;
  age: number;
  salary: number;
}
class Person extends Employee {
  name: string;
  age: number;
}

const p1: Person = new Employee();
