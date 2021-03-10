const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
});
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  //lets client know they have connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  //received messages from server (eg. when booted because of idling)
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //set username 
  conn.on('connect', () => {
    conn.write("Name: PAC");
  });

  //requesting snake movement from server
  // conn.on('connect', () => {
  //   //hardcoded Move:up - leaving here for reference but it shouldn't be used
  //   //setInterval(() => {conn.write("Move: up")}, 50);
  // })
  return conn;
}


console.log('Connecting ...');
module.exports = { connect };