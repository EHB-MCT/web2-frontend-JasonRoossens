let dogsList;
let dogsHTML = "";

window.onload = function () {

    const insertForm = document.getElementById("uploadForm")

    async function createDog(event) {

        //Get the data from the form fields
        let dogName = document.getElementById('name').value;
        let dogGeneration = document.getElementById('generation').value;
        let dogBreed = document.getElementById('breed').value;

        fetch(`https://web2-courseproject-retake.herokuapp.com/dogs`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: dogName,
                generation: dogGeneration,
                breed: dogBreed
            })

        }).then(response => {
            return response.json()
        }).then(async data => {
            console.log('Success:', data);
            //Add succes message

            //Update list
            await renderDogs();
        })
    }

    // When clicking submit on the form
    insertForm.addEventListener('submit', event => {
        event.preventDefault();

        createDog(event);

    });

    //Add listener to dog list
    document.getElementById('dogList').addEventListener('click', (event) => {
        //Keep searching for the parent node to register the correct click
        const dogId = event.target.closest('.dog').id;
        console.log(event.target)

        if (dogId) {
            if (event.target.className.indexOf('edit') !== -1) {
                console.log('edit')

            }

            if (event.target.className.indexOf('trash') !== -1) {
                console.log('trash')
            }

        }

    })

    async function renderDogs() {
        // Clean previous list
        dogsHTML = '';

        let resp = await fetch('https://web2-courseproject-retake.herokuapp.com/dogs');
        let data = await resp.json();

        data.forEach(dog => {
            dogsHTML += `<div class="row dog" 
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