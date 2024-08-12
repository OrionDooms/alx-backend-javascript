export default function updateStudentGradeByCity(list, city, newGrades) {
  if (Array.isArray(list)) {
    return list
      .filter((temp) => temp.location === city)
      .map((student) => {
        const gradeObj = newGrades.find((x) => x.studentId === student.id);
        const grade = gradeObj ? gradeObj.grade : 'N/A';
        return { ...student, grade };
      });
  }
  return [];
}
