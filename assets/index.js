

class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName()
    getId()
    getEmail()
    getRole()

}

class Manager extends Employee {
    constructor(officeNumber, name, id, email) {
        super(name, id, email)
        this.officeNumber = officeNumber

    }



    // * `getRole()`&mdash;overridden to return `'Manager'`

}

class Engineer extends Employee {

    constructor(gitHub, name, id, email) {
        super(name, id, email)
        this.gitHub = gitHub
    }


    getGithub()

    // `getRole()` & mdash;overridden to return `'Engineer'`

}


class Intern extends Employee {

    constructor(school, name, id, email) {
        super(name, id, email)
        this.school = school
    }


    getSchool()

    // * `getRole()` & mdash;overridden to return `'Intern'`

}







// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.