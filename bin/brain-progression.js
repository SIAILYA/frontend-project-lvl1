#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { readName } from '../src/cli.js';

let wins = false;
const name = readName();

console.log('What number is missing in the progression?');

const generateProgression = () => {
  let inc = Math.floor(Math.random() * 100) + 1
  let resProgression = []

  for (let i = Math.floor(Math.random() * 3); i < Math.floor(Math.random() * 5) + 8; i++) {
    resProgression.push(i * inc)
    // if (i === 0) {
    //   resProgression.push(inc)
    // } else {
    // }
  }

  let removedIndex = Math.floor(Math.random() * resProgression.length)
  let removed = resProgression[removedIndex]
  resProgression[removedIndex] = ".."

  return [resProgression.join(" "), removed]
}

for (let i = 0; i < 3; i += 1) {
  const [progression, removed] = generateProgression()

  console.log('Question:', `${progression}`);

  const answer = parseInt(readlineSync.question('Your answer: '));

  if (answer === removed) {
    console.log('Correct!');
    wins += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${removed}'.`);
    break;
  }
}

if (wins === 3) {
  console.log(`Congratulations, ${name}!`);
}
