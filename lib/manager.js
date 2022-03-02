const Employee = require("../lib/employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.role = "mM

    getRole() {
        return "Manager"
    }

}


module.exports = Manager;