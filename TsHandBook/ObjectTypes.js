function greet(person) {
    return 'Hello' + person.name;
}
function greetInterface(person) {
    return 'Hello' + person.name;
}
function greetTypes(person) {
    return 'Hello' + person.name;
}
function paintShape(opt) {
    let xPos = opt.xPos === undefined ? 0 : opt.xPos;
    let yPos = opt.yPos === undefined ? 0 : opt.yPos;
}
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
function doSomething(obj) {
    console.log(`prop has the value '${obj.prop}'.`);
    //   obj.prop = 'hello';
}
function visitForBirthday(home) {
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age++;
}
let writablePerson = {
    name: 'Person McPersonface',
    age: 42,
};
let readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
