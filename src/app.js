#!/usr/bin/env node

const fs = require('fs');
const problems = require('./problems.json');

const [,, ...args] = process.argv;

const random = Math.floor(Math.random() * problems.length);
const randomProblem = problems[random];

let name = '';

if (args.length === 1 && typeof args[0] === 'string') {
  name = args[0];
}

const content = `Your problem is below, may the force be with you padawan ${name}!
- Problem Name: ${randomProblem.name}

${randomProblem.description}

This problems rank is ${randomProblem.rank}
And do not forget JavaScript is the best!
- Besim
`;

fs.writeFile('your_problem_dear_padawan.txt', content, (err) => {
  if (err) {
    throw err;    
  }
  console.log('Your problem is ready to solve! Check your current working directory.');
});