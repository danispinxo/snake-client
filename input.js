const net = require("net");
const { 
  MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, SNEK_SOUND, EEEK_SOUND 
} = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) {

  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write(MOVE_UP);
  }
  if (data === 'a') {
    connection.write(MOVE_LEFT);
  }
  if (data === 's') {
    connection.write(MOVE_DOWN);
  }
  if (data === 'd') {
    connection.write(MOVE_RIGHT);
  }
  if (data === 'q') {
    connection.write(SNEK_SOUND);
  }
  if (data === 'e') {
    connection.write(EEEK_SOUND);
  }

};

module.exports = {
  setupInput
};