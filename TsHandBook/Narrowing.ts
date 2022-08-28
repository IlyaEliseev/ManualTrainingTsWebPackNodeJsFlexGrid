function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

const result = padLeft('123', 'input');
console.log(result);

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    for (const s of strs!) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
  }
}

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

function multipleAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

interface Container {
  value: number | null | undefined;
}

function multipleValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor;
  }
}

type Fish = { swim: () => void; name: string };
type Bird = { fly: () => void; name: string };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    animal;
  }

  return animal;
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

let x = Math.random() < 0.5 ? 10 : 'hello';
x = 1;
console.log(x);
x = 'goodbye!';
console.log(x);

function exampleMath() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;
  console.log(x);

  if (Math.random() < 0.5) {
    x = 'hello';
    console.log(x);
  } else {
    x = 100;
    console.log(x);
  }

  return x;
}

declare function getSmallPet(): Fish | Bird;

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === 'sharkey') return false;
  return isFish(pet);
});

// interface Shape {
//   kind: 'circle' | 'square';
//   radius?: number;
//   sideLength?: number;
// }

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Triangle {
  kind: 'triangle';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
  }
}
