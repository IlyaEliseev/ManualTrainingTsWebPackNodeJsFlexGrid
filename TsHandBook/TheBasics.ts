import express from 'express';

const message = 'Hello Word';
message.toLowerCase();
message();

const user = {
  name: 'Daniel',
  age: 26,
};

user.location;

const announcement = 'Hello World!';

announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
announcement.toLocaleLowerCase();

function flipCoin() {
  return Math.random < 0.5;
}

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet('Brendan');

function greet_explicitTypes(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet_explicitTypes('Brendan', Date());
greet_explicitTypes('Brendan', new Date());
