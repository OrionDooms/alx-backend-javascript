export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    const map1 = list.map((x) => x.id);
    return map1;
  }
  return [];
}
