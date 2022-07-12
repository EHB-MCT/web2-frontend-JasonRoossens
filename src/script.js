let list = [];
let dog = [];

function getData() {

    fetch('https://web2-courseproject-retake.herokuapp.com/dogs')
        .then(resp => resp.json())
        .then(data => {
            list = data
            console.log(data)

        });

}

getData();



function getDogApi() {

    fetch('https://api.thedogapi.com/v1/breeds')
        .then(resp => resp.json())
        .then(data => {
            list = data
            console.log(list)

        });

}

getDogApi();