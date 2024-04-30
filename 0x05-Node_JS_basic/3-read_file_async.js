const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        let studentsCount = 0;
        const fields = {};
        for (const line of lines) {
          const student = line.split(',');
          const field = student[3];
          if (!(field in fields)) {
            fields[field] = [];
          }
          if (field !== '' && !isNaN(parseInt(student[0]))) {
            studentsCount++;
            fields[field].push(student[0]);
          }
        }
        console.log(`Number of students: ${studentsCount}`);
        for (const field in fields) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
