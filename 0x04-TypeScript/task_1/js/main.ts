interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any; // Allows additional properties
}

const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "New York",
    age: 35, // Additional property
    subject: "Mathematics" // Another additional property
};
const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: "Los Angeles",
    age: 30, // Additional property
    subject: "Science" // Another additional property
};
console.log(teacher1);


interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    yearsOfExperience: 15,
    location: "Chicago",
    age: 45, // Additional property
    subject: "History", // Another additional property
    numberOfReports: 17
};

console.log(director1);


// Function to print teacher details
interface printTeacher {
    (teacher: Teacher): string;
}
function printTeacher(teacher: Teacher): string {
    return `${teacher.firstName.charAt(0)}. ${teacher.lastName}`;
}
console.log(printTeacher(teacher1)); // Output: J. Doe


// Writing a class
interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

    class StudentClass{
    firstName: string;
    lastName: string;

    constructor({firstName, lastName} : Student){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomwWork(): string{
        return "Currently working"
    }

    displayName(): string{
        return this.firstName;
    }
}
