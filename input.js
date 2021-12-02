// const connect = require('./client');
let connection;
const { moveKeys, msg } = require('./constants');

const setupInput = function (conn) {
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

  for (const key of Object.keys(moveKeys)) {
    if (data === key) {
      connection.write(moveKeys[key])
    }
  }
  for (const key of Object.keys(msg)) {
    if (data === key) {
      connection.write(msg[key])
    }
  }

  // if (key === "w") {
  //   connection.write('Move: up')
  // }
  // if (key === "s") {
  //   connection.write('Move: down')
  // }
  // if (key === "a") {
  //   connection.write('Move: left')
  // }
  // if (key === "d") {
  //   connection.write('Move: right')
  // }
  // if (key === "j") {
  //   connection.write('Say: Gotta go fast')
  // }
  // if (key === "k") {
  //   connection.write("Say: I'm fast as f*** boy")
  // }
  // if (key === "l") {
  //   connection.write('Say: wackawackawackawacka')
  // }
};

module.exports = setupInput;