const fs = require('fs').promises; // Use promises for asynchronous file access

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n');

    // Filter out empty lines
    const validLines = lines.filter((line) => line.trim() !== '');

    const studentData = validLines.map((line) => line.split(','));

    const studentCounts = {
      total: studentData.length,
      CS: 0,
      SWE: 0,
    };

    studentData.forEach((student) => {
      const field = student[student.length - 1].trim();
      if (field === 'CS') {
        studentCounts.CS++;
      } else if (field === 'SWE') {
        studentCounts.SWE++;
      }
    });

    console.log(`Number of students: ${studentCounts.total}`);
    console.log(`Number of students in CS: ${studentCounts.CS}. List: ${studentData
      .filter((student) => student[student.length - 1].trim() === 'CS')
      .map((student) => student[0])
      .join(', ')}`);
    console.log(`Number of students in SWE: ${studentCounts.SWE}. List: ${studentData
      .filter((student) => student[student.length - 1].trim() === 'SWE')
      .map((student) => student[0])
      .join(', ')}`);

    return Promise.resolve(); // Resolve the promise if successful
  } catch (error) {
    return Promise.reject(new Error('Cannot load the database')); // Reject the promise with an error
  }
}

module.exports = countStudents;

