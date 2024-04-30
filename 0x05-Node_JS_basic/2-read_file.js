const fs = require('fs');

function countStudents(database) {
  let students = [];
  const StudentGroup = {};
  const studentObj = [];

  try {
    students = fs.readFileSync(database, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  students = students.split('\n');
  const header = students.shift().split(',');

  students.forEach((element) => {
    if (element) {
      const studentInfo = element.split(',');

      header.forEach((header, index) => {
        studentObj[header] = studentInfo[index];
        if (header === 'field') {
          if (StudentGroup[studentInfo[index]]) {
            StudentGroup[studentInfo[index]].push(studentObj.firstname);
          } else {
            StudentGroup[studentInfo[index]] = [studentObj.firstname];
          }
        }
      });
      studentObj.push(studentObj);
    }
  });
  console.log(`Number of students: ${studentObj.length}`);

  for (const info in StudentGroup) {
    if (StudentGroup[info]) {
      const listStudents = StudentGroup[info];
      console.log(`Number of students in ${info}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
    }
  }
}

module.exports = countStudents;
