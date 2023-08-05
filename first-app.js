// const fs = require('fs')
// fs.writeFileSync('hello.txt','hello from Node.js')

const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);