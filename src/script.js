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
            if (event.target.className.indexOf('heart') !== -1) {
                console.log('favorite')

            }

        }

    })

    function fetchDogImages() {

        fetch('https://api.thedogapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => {
                this.data = data;

            });

    }

    async function renderDogs() {

        fetchDogImages();

        dogsHTML = '';

        let resp = await fetch('https://web2-courseproject-retake.herokuapp.com/dogs');
        let data = await resp.json();

        // <img src="${this.data[1].image.url}" alt="Dogs" style="width:90%"></img> (add an image)

        data.forEach(dog => {
            dogsHTML += `<div class="row dog dogCard" 
            id="${dog._id}"> 
            <div class="col-10">
                <img src="./images/dog.jpg" class="cardImg" alt="Girl in a jacket" width="250" height="180">
                <p><h3>${dog.name}</h3> ${dog.generation} - ${dog.breed}</p>
            </div>
            
            </div>
            
        </div>`
        })

        //not used
        /* <div class="col-1 favorite">
                <a id="${dog._id}"><i class="far fa-heart"></i></a>
                <div class="col-1 edit">
                <i id="${dog._id}" class="fas fa-edit"></i> 
            </div>                         
            <div class="col-1 trash">
                <i id="${dog._id}" class="fas fa-trash"></i>
            </div> */

        document.getElementById("dogList").innerHTML = dogsHTML;

    }

    renderDogs();


}



// select with search

/* $(document).ready(function () {
    $('select').selectize({
        sortField: 'text'
    });
}); */


function fetchBreeds() {
    $.get('https://dog.ceo/api/breeds/list/all', (data) => {
        const breedNames = data.message;
        console.log(data.message)
        const select = document.getElementById('breed');

        for (const key in breedNames) {
            if (breedNames.hasOwnProperty(key)) {
                const option = document.createElement('option');
                option.value = key;
                option.innerHTML = key;

                select.appendChild(option);
            }
        }
    });

}

fetchBreeds();

// https://www.youtube.com/watch?v=W1Kttu53qTg