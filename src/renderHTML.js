const fs = require('fs')


function BuildHTMLPage() { }


// this prototype is built do spit out the html file
BuildHTMLPage.prototype.renderHTMLPage = function (teamArray) {

    // this declares the variable that will be all of the cards that will go in the html container
    let cardHTML = ""

    // this for loop goes through and takes each employee object and checks to see what role it is. It then creates a card for each employee and adds it to the cardHTML variable. The contents of the card depends on what role the employee has.
    for (let index = 0; index < teamArray.length; index++) {
        const element = teamArray[index];

        let employeeRole = element.role
        let employeeSpecificInfo = ""

        if (element.role === "Manager") {
            employeeSpecificInfo = `Office number: ${element.officeNumber}`
            employeeRole = `☕ ${element.getRole()}`
        } else if (element.role === "Engineer") {
            employeeSpecificInfo = `GitHub:  <a href="https://github.com/${element.getGithub()}" target="_blank">${element.getGithub()}</a> `
            employeeRole = `🛠 ${element.getRole()}`
        } else {
            employeeSpecificInfo = `School: ${element.getSchool()}`
            employeeRole = `🎓 ${element.getRole()}`
        }


        cardHTML += `<div class=" card" style="width: 18rem;">
        <div class="card-header">
            <div class="name-of-employee">${element.getName()}</div>
            <div class="position-of-employee">${employeeRole}</div>
        </div>
        <div class="card-body">
            <ul class="list-group m-3">
                <li class="list-group-item">ID: ${element.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto: ${element.getEmail()}">${element.getEmail()}</a></li>
                <li class="list-group-item">${employeeSpecificInfo}</li>
            </ul>
        </div>
    </div> `
    }


    // this returns the html with the cards added to it.
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
    
        <header class="d-flex align-items-center justify-content-center"">
            <h1>My Team</h1>
        </header>
        
        <div class=" card-container d-flex justify-content-center flex-wrap">
    
            
    ${cardHTML}
    
            </div>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"></script>
            <script src="./assets/index.js"></script>
    </body>
    
    </html>`
}



module.exports = BuildHTMLPage;