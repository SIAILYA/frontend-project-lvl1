#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { readName } from '../src/cli.js';

let wins = false;
const name = readName();

console.log('Find the greatest common divisor of given numbers.');

const findGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return findGCD(b, a % b);
};

for (let i = 0; i < 3; i += 1) {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const correctAnswer = findGCD(a, b);

  console.log('Question:', `${a} ${b}`);

  const answer = parseInt(readlineSync.question('Your answer: '));

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
