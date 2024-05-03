const process = require('process');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Welcome to Holberton School, what is your name? ', (name) => {
  console.log(`Your name is: ${name}`);
  readline.close();
});

process.on('exit', () => {
  console.log('\nThis important software is now closing');
});
