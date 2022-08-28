var obj = { x: 0 };
// obj.foo();
// obj();
// obj.bar = 100;
// obj = 'hello';
// const n: number = obj;
// let myName: string = 'Alice';
// let myName_noType = 'Alice';
function geet(name) {
    console.log('Hello, ' + name.toUpperCase() + '!!');
}
function getFavoriteNumber() {
    return 26;
}
var names = ['Alice', 'Bob', 'Eve'];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
function printCoord(pt) {
    console.log('The coordinate x value is ' + pt.x);
    console.log('The coordinate y value is ' + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    var _a;
    console.log('First: ' + obj.first.toUpperCase());
    if (obj.last !== undefined) {
        console.log('Last: ' + obj.last.toUpperCase());
    }
    console.log('Last: ' + ((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
}
printName({ first: 'Bob' });
printName({ first: 'Bob', last: 'Alisson' });
function printId(id) {
    if (typeof id === 'string') {
        console.log('You ID is: ' + id.toUpperCase());
    }
    else {
        console.log('You ID is: ' + id);
    }
}
printId(101);
printId('202');
function welcomPeople(x) {
    if (Array.isArray(x)) {
        console.log('Hello, ' + x.join(' and '));
    }
    else {
        console.log('Welcom lone travaler ' + x);
    }
}
function getFirstThree(x) {
    return x.slice(0, 3);
}
function printCoordAliases(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordAliases({ x: 100, y: 100 });
function sanitizedInput(str) {
    return sanitize(str);
}
var userInput = sanitizedInput(getInput());
userInput = 'new input';
function printCoordInterface(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
function printText(s, alignment) { }
printText('Hello', 'left');
printText('Hello', '111');
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) { }
configure({ width: 100 });
configure('auto');
configure('automatic');
var req = { url: 'hhtps://example.com', methode: 'GET' };
handleRequest(req.url, req.methode);
var req1 = { url: 'hhtps://example.com', methode: 'GET' };
handleRequest(req1.url, req1.methode);
var req2 = { url: 'hhtps://example.com', methode: 'GET' };
handleRequest(req2.url, req2.methode);
function doSomething(x) {
    if (x === null) {
    }
    else {
        console.log('Hello, ' + x.toUpperCase());
    }
}
function liveDangerously(x) {
    console.log(x.toFixed());
}
var oneHundred = BigInt(100);
var anotherHundred = 100n;
var firstName = Symbol('name');
var secondName = Symbol('name');
