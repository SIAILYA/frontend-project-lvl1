#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { readName } from '../src/cli.js';

let wins = false;
const name = readName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101].indexOf(num) !== -1;

for (let i = 0; i < 3; i += 1) {
  const a = Math.floor(Math.random() * 100);
  const correctAnswer = isPrime(a) ? 'yes' : 'no';

  console.log('Question:', `${a}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
    wins += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (wins === 3) {
  console.log(`Congratulations, ${name}!`);
}
