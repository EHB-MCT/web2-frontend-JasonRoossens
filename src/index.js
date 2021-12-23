let dogsList;
let dogsHTML = "";

window.onload = function () {
    async function renderDogs() {
        // Clean previous list
        dogsHTML = '';

        let resp = await fetch('https://web2-courseproject-jason.herokuapp.com/dogs');
        let data = await resp.json();

        data.forEach(dog => {
            challengesHTML += `<div class="row dog" 
            id="${dog._id}">   
            <div class="col-10">
                <p>${dog.name} - ${dog.generation} - ${dog.breed}</p>
            </div>
            <div class="col-1 edit">
                <i class="fas fa-edit"></i> 
            </div>                         
            <div class="col-1 trash">
                <i class="fas fa-trash"></i>
            </div>
        </div>`
        })

        document.getElementById("dogList").innerHTML = dogsHTML;

    }

    renderDogs();


}