interface DirectorInterface{
workFromHome(): string
getCoffeeBreak(): string
workDirectorTasks(): string
}


interface TeacherInterface{
    workFromHome(): string
    getCoffeeBreak():string
    workTeacherTasks(): string
}

class Director implements DirectorInterface{
    workFromHome(): string{
        return "working from home"
    }

    getCoffeeBreak(): string{
        return "Getting a coffee break"
    }

    workDirectorTasks(): string{
        return "Getting to director tasks"
    }
}

class Teacher implements TeacherInterface{
workFromHome() : string {
    return "Cannot work from home"
}
getCoffeeBreak() : string {
    return "Cannot have a break"
} 
workTeacherTasks(): string{
    return "Getting to work"
}
}

function createEmployee (salary: number|string): Director|Teacher{
    let numericSalary: number;
    if (typeof salary === 'number') {
        numericSalary = salary;
    } else {
        numericSalary = parseFloat(salary);
    }

    if(!isNaN(numericSalary) && numericSalary < 500) {
        return new Teacher();
    }else {
        return new Director();
    }

}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// String literal types
type subjects= "Math"|"History";

function teachClass(todayClass:subjects): string{
    if(todayClass === "Math"){
        return "Teaching Math"
    }else{
        return "Teaching History "
    }
}
console.log(teachClass("Math"))
console.log(teachClass("History"))
