function padLeft(padding, input) {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + input;
    }
    return padding + input;
}
const result = padLeft('123', 'input');
console.log(result);
function printAll(strs) {
    if (strs && typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === 'string') {
        console.log(strs);
    }
    else {
    }
}
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}
function multipleAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => x * factor);
    }
}
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multipleValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
function move(animal) {
    if ('swim' in animal) {
        animal;
    }
    return animal;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
let x = Math.random() < 0.5 ? 10 : 'hello';
x = 1;
console.log(x);
x = 'goodbye!';
console.log(x);
function exampleMath() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = 'hello';
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1 = zoo.filter(isFish);
const underWater2 = zoo.filter(isFish);
const underWater3 = zoo.filter((pet) => {
    if (pet.name === 'sharkey')
        return false;
    return isFish(pet);
});
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return Math.pow(shape.sideLength, 2);
        default:
            const exhaustiveCheck = shape;
            return exhaustiveCheck;
    }
}
