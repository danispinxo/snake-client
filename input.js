const net = require("net");

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
    connection.write("Move: up");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === 'g') {
    connection.write("Say: Is this thing on???");
  }
  if (data === 'q') {
    connection.write("Say: Ssssss! I'm snek.");
  }
  if (data === 'o') {
    connection.write("Say: OoOoOoOoOo");
  }
  if (data === 'e') {
    connection.write("Say: Eeek! A snake!");
  }

};

module.exports = {
  setupInput
};