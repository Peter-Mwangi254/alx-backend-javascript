// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const sstudent1: Student = {
	firstName: "Peter",
	lastName: "Brian",
	age: 24,
	location: "Nairobi"
}

const student2: Student = {
	firstName: "Maxwell",
	lastName: "Mwangi",
	age: 30,
	location: "Mombasa"
}

// Create an array of students
const studentsList = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
