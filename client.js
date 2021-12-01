const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  },
  // () => {
  //   console.log('connected to server');
  // }
  );
  conn.on("connect", () => {
    conn.write("Name: DVR");
  })

  conn.on("connect", () => {
    console.log("Connected to the game server");
  })

  conn.on("data", (data) => {
    console.log(data);
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
  
};

module.exports = connect;