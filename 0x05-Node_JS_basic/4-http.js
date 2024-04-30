const http = require('http');

const hostName = '127.0.0.1';
const port = 1245;

const application = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

application.listen(port, hostName);

module.exports = application;
