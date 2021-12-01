const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541 // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Connected to the game server");
    conn.write("Name: DVR");
    // conn.write("Move: up");
    // setInterval(() => {
    //  conn.write("Move: up")
    // }, 50)      
  })

  conn.on("data", (data) => {
    console.log(data);
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
  
};

// console.log("Connecting ...");
// connect();

module.exports = connect;