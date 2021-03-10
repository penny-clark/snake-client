//This file handles the user input

//this function will assign the keyboard commands
const handleUserInput = (key) => {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}

const setupInput = function() {
  const stdin = process.stdin(handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

module.exports = { setupInput };