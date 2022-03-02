
const inquirer = require('inquirer');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

let teamMembers = []



// take user input and call a class to construct it, and then push it to team member
// push each team member to the team member array
// team member array is sent through a for loop to build each card that is added then all together returned to the html build page




function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter employee's name",
                name: 'name',
            },
            {
                type: 'input',
                message: "Enter employee's ID",
                name: 'Id',
            },
            {
                type: 'input',
                message: "Enter employee's email address",
                name: 'email',
            },
            {
                type: 'input',
                message: "Enter employee's office number",
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
                message: "Would you like to add another employee?",
                name: 'addEmployee',
                choices: ["Add an engineer", "Add an intern", "Finish building team"]
            },
        ])
        .then((data) => {
            if (data.addEmployee === "Add an engineer") {
                buildNewEngineer()
            } else if (data.addEmployee === "Add an intern") {
                buildNewIntern()
            }else{
                compileTeam()
            }

      
        });
}




function buildNewEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter employee's name",
                name: 'name',
            },
            {
                type: 'input',
                message: "Enter employee's ID",
                name: 'Id',
            },
            {
                type: 'input',
                message: "Enter employee's email address",
                name: 'email',
            },
            {
                type: 'input',
                message: "Enter employee's gitHub username",
                name: 'gitHub',
            },
        ])
        .then((data) => {


            promptForANewTeamMember()
        });
}


function buildNewIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter first user",
                name: 'description',
            },
        ])
        .then((data) => {


            promptForANewTeamMember()
        });
}



function compileTeam(){
console.log(teamMembers);
}



buildTeam()
