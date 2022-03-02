const fs = require('fs')


function BuildHTMLPage() { }



BuildHTMLPage.prototype.compileTeamCards = function (teamArray) {

    let cardHTML = ""



    for (let index = 0; index < teamArray.length; index++) {
        const element = teamArray[index];

        let employeeRole = element.role
        let employeeSpecificInfo = ""


        if (employeeRole === "manager") { }


        cardHTML += `<div class=" card" style="width: 18rem;">
        <div class="card-header">
            <div class="name-of-employee">${element.getName()}</div>
            <div class="position-of-employee">${employeeRole}</div>
        </div>
        <div class="card-body">
            <ul class="list-group m-3">
                <li class="list-group-item">ID: ${element.getId()}</li>
                <li class="list-group-item">Email: ${element.getEmail()}</li>
                <li class="list-group-item">${employeeSpecificInfo}</li>
            </ul>
        </div>
    </div> `

    }



    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    
    <body>
    
        <header class="d-flex align-items-center justify-content-center"">
            <h1>My Team</h1>
        </header>
        
        <div class=" card-container d-flex justify-content-center">
    
            
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



// function buildHTML(cardHTML) {

//     return `<!DOCTYPE html>
//     <html lang="en">

//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Team Profile</title>
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
//             integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//         <link rel="stylesheet" href="./assets/style.css">
//     </head>

//     <body>

//         <header class="d-flex align-items-center justify-content-center"">
//             <h1>My Team</h1>
//         </header>

//         <div class=" card-container d-flex justify-content-center">


//     ${cardHTML}

//             </div>
//             <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//                 integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//                 crossorigin="anonymous"></script>
//             <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
//                 integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//                 crossorigin="anonymous"></script>
//             <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
//                 integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//                 crossorigin="anonymous"></script>
//             <script src="./assets/index.js"></script>
//     </body>

//     </html>`
// }


// function renderHTML(cardHTML) {

//     fs.writeFile("index.html",)


//     fs.writeFile("index.html", (buildHTML(cardHTML)), (err) =>
//         err ? console.log(err) : console.log("Building team html")
//     );

// }



module.exports = BuildHTMLPage;
