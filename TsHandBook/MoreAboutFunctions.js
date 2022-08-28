function greeter(fn) {
    fn('Hello');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + ' returned ' + fn(6));
}
function fn(ctor) {
    return new ctor('hello');
}
function firstElement(arr) {
    return arr[0];
}
const s = firstElement(['a', 'b', 'c']);
const n = firstElement([1, 2, 3]);
const u = firstElement([]);
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
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
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
const arr = combine([1, 2, 3], ['hello']);
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
const a = firstElement1([1, 2, 3]);
const b = firstElement2([1, 2, 3]);
function filter1(arr, func) {
    return arr.filter(func);
}
function filter2(arr, func) {
    return arr.filter(func);
}
function greet1(s) {
    console.log('Hello' + s);
}
function greet2(s) {
    console.log('Hello' + s);
}
greet1('world');
greet2('world');
function f(n) { }
f();
f(1);
f(undefined);
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
function makeDate(mOrTimeStamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimeStamp, d);
    }
    else {
        return new Date(mOrTimeStamp);
    }
}
const d1 = makeDate(12345);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1);
function len(x) {
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
const db = getDB();
const admin = db.filtersUsers(function () {
    return this.admin;
});
function noop() {
    return;
}
function safeParse(s) {
    return JSON.parse(s);
}
const obj = safeParse('string');
function fn1(x) {
    if (typeof x === 'string') {
    }
    else if (typeof x === 'number') {
    }
    else {
        x;
    }
}
function doSomething1(f) {
    return f(1, 2, 3, 4);
}
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
const a1 = multiply(10, 1, 2, 3, 4);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
const args = [8, 5];
const angle = Math.atan2(...args);
function sum({ a, b, c }) {
    return console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
