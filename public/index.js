const form = document.querySelector('form1')
const nameInput = document.querySelector('#bird-name')
const speciesSelect = document.querySelector('#species-select')
const ageInput = document.querySelector('#age')
const weightInput = document.querySelector('#weight')
const foodInput = document.querySelector('#food')
const foodAmountInput = document.querySelector('#food-amount')
const poopColorInput = document.querySelector('#poop-color')
const exerciseInput = document.querySelector('#exercise')
const petList = document.querySelector('#pet-list')

function handleSubmit(event) {
    event.preventDefault()

    if (nameInput.value < 1) {
        alert ('You must enter a valid name')
        return
    }

    if (nameInput.value < 1) {
        alert ('You must enter a valid name')
        return
    }


    if (ageInput.value < 1) {
        alert ('You must enter a valid age')
        return
    }


    if (weightInput.value < 1) {
        alert ('You must enter a valid weight')
        return
    }


    if (foodInput.value < 1) {
        alert ('You must enter a valid type of food')
        return
    }


    if (foodAmountInput.value < 1) {
        alert ('You must enter a valid food amount')
        return
    }


    if (poopColorInput.value < 1) {
        alert ('You must enter a valid poop color')
        return
    }

    let body = {
        birdName: nameInput.value,
        birdAge: ageInput.value,
        weight: weightInput.value,
        typeOfFood: foodInput.value,
        amountBeingFed: foodAmountInput.value,
        poopColor: poopColorInput.value,
        timeOutsideCage: exerciseInput.value,
        speciesId: +speciesSelect.value
    }

    axios.post('http://localhost:4050/pet', body)
    .then(() => {
        speciesSelect.value = 1
        nameInput.value = ''
        ageInput.value = ''
        weightInput.value = ''
        foodInput.value = ''
        foodAmountInput.value = ''
        poopColorInput.value = ''
        exerciseInput.value = ''
        getCities()
    })
}

function deleteCard(id) {
    axios.delete(`http://localhost:4050/pet/${id}`)
    .then(() => getCities)
    .catch(err => console.log(err))
}

