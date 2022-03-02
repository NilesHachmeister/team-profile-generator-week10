const Employee = require("../lib/employee")

class Engineer extends Employee {

    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub
        this.role = "Engineer"
    }


    getGithub() {
        return this.gitHub
    }

    getRole() {
        return "Engineer"
    }




}

module.exports = Engineer;