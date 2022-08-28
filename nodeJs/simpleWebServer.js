const http = require('http');
const tesla = require('./car');
const ford = require('./car').car;

const port = 3000;
const hostname = '127.0.0.1';
const server = http.createServer((req, res) => {
  res.StatusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  res.end(tesla);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
