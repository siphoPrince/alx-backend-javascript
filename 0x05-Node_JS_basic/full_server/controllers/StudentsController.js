const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase('./database.csv');
      res.status(200).send('This is the list of our students\n' +
        Object.entries(studentsByField)
          .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
          .map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`)
          .join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const studentsByField = await readDatabase('./database.csv');
      const students = studentsByField[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

