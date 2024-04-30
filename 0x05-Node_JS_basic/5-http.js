const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    countStudents(process.argv[2])
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
