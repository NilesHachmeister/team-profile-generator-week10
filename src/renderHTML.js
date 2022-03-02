
function compileTeamCards(teamArray) {

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


    renderHTML(cardHTML)
}




function renderHTML(cardHTML) {



}