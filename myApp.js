const http = require("http");
const color = require("colors");
const displayContent = require("./routes");

const server = http.createServer(displayContent);

server.listen(3001);
console.log("hello".green);
