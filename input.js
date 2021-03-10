//This file handles the user input
let connection;
//this function will assign the keyboard commands
const handleUserInput = (key) => {
  const pace = 300;
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    setInterval(() => {connection.write('Move: up')}, pace);
  } else if (key === 'a') {
    setInterval(() => {connection.write('Move: left')}, pace);
  } else if (key === 's') {
    setInterval(() => {connection.write('Move: down')}, pace);
  } else if (key === 'd') {
    setInterval(() => {connection.write('Move: right')}, pace);
  } else if (key === 'h') {
    connection.write('Say: Hi!')
  } else if (key === 'b') {
    connection.write('Say: bye')
  } else if (key === 'o') {
    connection.write('Say: ok')
  }
}

//connection var is how the input module will sent data to server without a connection object

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  return stdin;
}


module.exports = { setupInput };