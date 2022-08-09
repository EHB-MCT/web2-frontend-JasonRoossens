const BASE_API_URL = 'https://api.thedogapi.com/v1'

const fetchDogBreeds = async () => {


    const response = await fetch(BASE_API_URL + '/breeds')
    const dogBreeds = await response.json();
    populateDogSelect(dogBreeds);
}

const populateDogSelect = (breeds) => {
    const select = document.querySelector('.breed-select');
    const breedOptions = breeds.map(breed => {
        const option = document.createElement('option');
        option.text = breed.name;
        option.value = breed.id;
        return option;
    })
    breedOptions.forEach(breedOption => {
        select.appendChild(breedOption);
    })
}

const fillDogImage = (imageUrl) => {
    document.querySelector('#dog-image').setAttribute('src', imageUrl);
}


const GetDogByBreed = async (breedId) => {

    const [data] = await fetch(BASE_API_URL + '/images/search?include_breed=1&breed_id=' + breedId).then((data) => data.json())
    const {
        url: imageUrl,
        breeds
    } = data;
    fillDogImage(imageUrl);
    fillDogDescription(breeds[0]);
}

const changeDog = () => {
    console.log(event.target.value)
    GetDogByBreed(event.target.value)
}

fetchDogBreeds();