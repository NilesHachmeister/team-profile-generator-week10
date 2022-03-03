
// this file declares the employee class.
class Employee {
    constructor(name, id, email, role) {
        this.name = name
        this.id = id
        this.email = email
        this.role = role

    }

    // this method is used to get the name of the employee
    getName() {
        return this.name
    }

    // this method is used to get the id of the emlpoyee
    getId() {
        return this.id
    }

    // this method is used to get the email address of the employee 
    getEmail() {
        return this.email
    }

    // this method is used to get the roll of the employee
    getRole() {
        return this.role
    }
}

module.exports = Employee;

