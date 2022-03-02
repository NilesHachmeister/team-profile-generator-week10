
const inquirer = require('inquirer');


count = 0;






function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Enter first user",
                name: 'description',
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


        
    // promptForANewTeamMember()
}


// function promptForANewTeamMember() {

//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 message: "Would you like to add another employee?",
//                 name: 'addEmployee',
//                 choices: ["Add an engineer", "Add an intern", "Finish building team"]
//             },

//         ])

//         .then((data) => {
//             console.log(data);

//             count++
//             console.log(count);

//             if (data.addEmployee !== "Finish building team") {
//                 buildNewTeamMember()
//             } else {
//                 return
//             }
//         });
// }




// function buildNewEngineer() {
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 message: "Enter first user",
//                 name: 'description',
//             },
//         ])
//         .then((data) => {



//         });
//     promptForANewTeamMember()

// }







buildTeam()
