const Employee = require("../lib/employee")


// this declares the engineer class ass an extention of the employee class
class Engineer extends Employee {

    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
        this.role = "Engineer"
    }


    // this method is used to get the github of the employee
    getGithub() {
        return this.gitHub
    }

    // this method is used to get the roll of the employee
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;