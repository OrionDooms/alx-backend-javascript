export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list)) {
    const temp = list.filter((x) => x.location === city);
    return temp;
  }
  return [];
}
