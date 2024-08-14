export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

  const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
  };

  const student2: Student = {
  firstName: "jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
  };

  export const studentsList: Student[] = [student1, students2];

  function renderTable() {
  	const tableBody = document.createElement("table-body");
	const tbody = document.createElement("tbody");

	studentsList.forEach((student) => {
		const row = document.createElement("tr");

		const firstNameCell = document.createElement("td");
		firstNameCell.textContent = student.firstName;

		const locationCell = document.createElement("td");
		locationCell.textContent = student.location;

		row.appendChild(firstNameCell);
		row.appendChild(locationCell);
		tbody.appendChild(row);
	});
	table.appendChild(tbody);
	document.body.appendChild(table);
}
renderTable();
