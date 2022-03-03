const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const renderHTML = require('./src/renderHTML')


let teamMembers = []







// check readme



// comment

// readme

// video



function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the team manager's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the team manager's id?",
                name: 'Id',
            },
            {
                type: 'input',
                message: "What is the team manager's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the team manager's office number?",
                name: 'officeNumber',
            },
        ])
        .then((data) => {

            let employee = new Manager(data.name, data.Id, data.email, data.officeNumber)
            teamMembers.push(employee)


            promptForANewTeamMember()
        });


}


function promptForANewTeamMember() {

    inquirer
        .prompt([
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                name: 'addEmployee',
                choices: ["Add an engineer", "Add an intern", "I don't want to add any more team members"]
            },
        ])
        .then((data) => {
            if (data.addEmployee === "Add an engineer") {
                buildNewEngineer()
            } else if (data.addEmployee === "Add an intern") {
                buildNewIntern()
            } else {
                compileTeam()
            }


        });
}




function buildNewEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your engineer's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is your engineer's id?",
                name: 'Id',
            },
            {
                type: 'input',
                message: "What is your engineer's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your engineer's GitHub username?",
                name: 'gitHub',
            },
        ])
        .then((data) => {

            let employee = new Engineer(data.name, data.Id, data.email, data.gitHub)
            teamMembers.push(employee)

            promptForANewTeamMember()
        });
}


function buildNewIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is your intern's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is your intern's id?",
                name: 'Id',
            },
            {
                type: 'input',
                message: "What is your intern's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your intern's school?",
                name: 'school',
            },
        ])
        .then((data) => {
            let employee = new Intern(data.name, data.Id, data.email, data.school)
            teamMembers.push(employee)

            promptForANewTeamMember()
        });
}



function compileTeam() {
    const newPage = new renderHTML;




    fs.writeFile("./dist/index.html", (newPage.compileTeamCards(teamMembers)), (err) =>
        err ? console.log(err) : console.log("Building team html")
    );


}



buildTeam()


