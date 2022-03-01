
const inquirer = require('inquirer');


count = 0;

function buildNewTeamMember() {

    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please write a short description of your project",
                name: 'description',
            },
            {
                type: 'list',
                message: "What would you like to do next?",
                name: 'addEmployee',
                choices: ["Add an engineer", "Add an intern", "Finish building team"]
            },

        ])

        .then((data) => {
            console.log(data);

            count++
            console.log(count);

            if (data.addEmployee !== "Finish building team") {
                buildNewTeamMember()
            } else {
                return
            }

        });


}


buildTeam()