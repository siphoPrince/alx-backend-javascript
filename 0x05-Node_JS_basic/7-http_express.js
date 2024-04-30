const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(() => {
      res.end();
    })
    .catch((error) => {
      res.type('text').status(500).send(error.message);
    });
});

app.listen(port);
module.exports = app;
