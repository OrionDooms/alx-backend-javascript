/* Implement a HolbertonCourse class */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an arrayof strings');
    } else {
      this._students = students;
    }
  }

  // Getter and setter for 'name'
  get name() { return this._name; }

  set name(XName) {
    if (typeof XName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = XName;
  }

  get length() { return this._length; }

  set length(XLength) {
    if (!Number.isInteger(XLength)) {
      throw new TypeError('Length must be a number');
    }
    this._length = XLength;
  }

  get students() { return this._students; }

  set students(XStudents) {
    if (!Array.isArray(XStudents)) {
      throw new TypeError('Students must be an arrayof strings');
    }
    this._students = XStudents;
  }
}
