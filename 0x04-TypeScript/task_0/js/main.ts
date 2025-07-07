interface student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1:student={
    firstName: 'Wilfred',
    lastName: 'Osozi',
    age: 30,
    location: 'Nairobi',
}

const student2:student={
    firstName: 'Tzuriel',
    lastName: 'Taji',
    age: 20,
    location: 'Thika',
}

const studentList:student[]= [student1, student2]

// Tables
const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
const headerLastName = document.createElement('th');
const headerAge = document.createElement('th');
const headerLocation = document.createElement('th');
headerFirstName.textContent = 'First Name';
headerLastName.textContent = 'Last Name';
headerAge.textContent = 'Age';
headerLocation.textContent = 'Location';
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLastName);
headerRow.appendChild(headerAge);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);


// Populate table with student data
studentList.forEach((student) => {
    const headRow = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    
    headRow.appendChild(firstNameCell);
    headRow.appendChild(locationCell);

    table.appendChild(headRow);

});