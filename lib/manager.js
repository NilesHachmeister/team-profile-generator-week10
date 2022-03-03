const Employee = require("../lib/employee")


// this declares the engineer class ass an extention of the employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = "Manager"
    }


    // this method is used to get the roll of the employee
    getRole() {
        return "Manager"
    }
}


module.exports = Manager;