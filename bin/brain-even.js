#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { readName } from '../src/cli.js';

let wins = false;
const name = readName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const num = Math.floor(Math.random() * 100);
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  console.log('Question:', num);

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
