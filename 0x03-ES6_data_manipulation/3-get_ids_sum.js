export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    const sum = list.reduce(
      (x, student) => x + student.id, 0,
    );
    return sum;
  }
  return [];
}
