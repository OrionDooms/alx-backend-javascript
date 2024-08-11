export default function createIteratorObject(report) {
  let allEmployees = [];

  for (const staff of Object.values(report.allEmployees)) {
    allEmployees = allEmployees.concat(staff);
  }
  return allEmployees[Symbol.iterator]();
}
