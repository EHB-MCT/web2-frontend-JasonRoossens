const fetchDogBreeds = () => {

    fetch('https://api.thedogapi.com/v1/breeds')
        .then(data => data.json())
        .then(dogs => console.log(dogs))
        .catch(e => console.log("promise was rejected", e));


}

fetchDogBreeds();