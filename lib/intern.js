const Employee = require("../lib/employee")

// this declares the intern class ass an extention of the employee class
class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.role = "Intern"
    }

    // this method is used to get the school of this employee
    getSchool() {
        return this.school
    }

    // this method is used to get the roll of the employee
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;