function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchedGrade) {
        return {
          ...student,
          grade: matchedGrade.grade,
        };
      }
      return {
        ...student,
        grade: 'N/A',
      };
    }
  });

export default updateStudentGradeByCity;
