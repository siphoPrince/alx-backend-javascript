const fs = require('fs');

function countStudents(path) {
    try {
        // Read the database file synchronously
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== ''); // Filter out empty lines

        let studentsCount = 0;
        const fields = {};

        // Loop through each line and count students in each field
        for (const line of lines) {
            const student = line.split(',');
            const field = student[3];

            if (!(field in fields)) {
                fields[field] = [];
            }

            // Check if the student's field is not empty
            if (field !== '' && !isNaN(parseInt(student[0]))) {
                studentsCount++;
                fields[field].push(student[0]);
            }
        }

        // Log the total number of students
        console.log(`Number of students: ${studentsCount}`);

        // Log the number of students in each field
        for (const field in fields) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
