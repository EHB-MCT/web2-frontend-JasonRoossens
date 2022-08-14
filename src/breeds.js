const BASE_API_URL = 'https://api.thedogapi.com/v1'

const fetchDogBreeds = async () => {


    const response = await fetch(BASE_API_URL + '/breeds')
    const dogBreeds = await response.json();
    fillDogSelect(dogBreeds);
}

const fillDogSelect = (breeds) => {
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

const createDescriptionEntry = ({
    label,
    value
}) => {
    const descriptionTerm = document.createElement('dt');
    descriptionTerm.textContent = label;
    const descriptionValue = document.createElement('dd');
    descriptionValue.textContent = value;
    const parentElement = document.querySelector('#dog-description')
    parentElement.appendChild(descriptionTerm);
    parentElement.appendChild(descriptionValue);
}

const clearDogDescription = () => {
    const descriptionElement = document.querySelector(
        '#dog-description'
    )

    while (descriptionElement.firstChild) {
        descriptionElement.removeChild(descriptionElement.firstChild);
    }
}

const fillDogDescription = ({
    bred_for: bredFor,
    name,
    temperament,
    life_span: lifeSpan,
    height,
    weight

}) => {
    clearDogDescription();
    createDescriptionEntry({
        label: 'Name:',
        value: name
    })
    createDescriptionEntry({
        label: 'Bred for:',
        value: bredFor
    })
    createDescriptionEntry({
        label: 'Temperament:',
        value: temperament
    })
    createDescriptionEntry({
        label: 'Life span:',
        value: lifeSpan
    })
    createDescriptionEntry({
        label: 'Height [cm]:',
        value: height.metric
    })
    createDescriptionEntry({
        label: 'Weight [kg]:',
        value: weight.metric
    })
}


const GetDogByBreed = async (breedId) => {

    const loadingElement = document.querySelector('.loading');
    loadingElement.classList.add('show-loading')
    const [data] = await fetch(BASE_API_URL + '/images/search?include_breed=1&breed_id=' + breedId).then((data) => data.json())
    const {
        url: imageUrl,
        breeds
    } = data;
    fillDogImage(imageUrl);
    fillDogDescription(breeds[0]);
    loadingElement.classList.remove('show-loading');
}

const changeDog = () => {
    console.log(event.target.value)
    GetDogByBreed(event.target.value)
}

fetchDogBreeds();