// const connect = require('./client');
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write('Move: up')
  }
  if (key === "s") {
    connection.write('Move: down')
  }
  if (key === "a") {
    connection.write('Move: left')
  }
  if (key === "d") {
    connection.write('Move: right')
  }
  if (key === "j") {
    connection.write('Say: Gotta go fast')
  }
  if (key === "k") {
    connection.write("Say: I'm fast as f*** boy")
  }
  if (key === "l") {
    connection.write('Say: wackawackawackawacka')
  }
};

module.exports = setupInput;