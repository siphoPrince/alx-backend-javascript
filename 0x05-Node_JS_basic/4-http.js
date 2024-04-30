const http = require('http');

const host_name = '127.0.0.1';
const port = 1245;

const application = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

application.listen(port, host_name);

module.exports = application;
