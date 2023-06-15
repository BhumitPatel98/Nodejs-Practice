// const fs = require('fs')
// fs.writeFileSync('hello.txt','hello from Node.js')

const http = require('http');

const routes = require('./routes')

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);