const form = document.getElementById('form1')
const nameInput = document.querySelector('#bird-name')
const speciesSelect = document.querySelector('#species-select')
const ageInput = document.querySelector('#age')
const weightInput = document.querySelector('#weight')
const foodInput = document.querySelector('#food')
const foodAmountInput = document.querySelector('#food-amount')
const poopColorInput = document.querySelector('#poop-color')
const exerciseInput = document.querySelector('#exercise')
const petList = document.querySelector('#pet-list')


function handleSubmit(e) {
    e.preventDefault()

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
        speciesSelect.value = 1;
        nameInput.value = '';
        ageInput.value = '';
        weightInput.value = '';
        foodInput.value = '';
        foodAmountInput.value = '';
        poopColorInput.value = '';
        exerciseInput.value = '';
        // getPet()
    })
}

function deleteCard(id) {
    axios.delete(`http://localhost:4050/pet/${id}`)
    .then(() => getPet())
    .catch(err => console.log(err))
}

function getPet() {
    petList.innerHTML = ''

    axios.get('http://localhost:4050/pet/')
        .then(res => {
            res.data.forEach(elem => {
                let petCard = `<div class = "pet-card">
                <h2>${elem['bird_name']}</h2>
                <h3>Age: ${elem['bird_age']}</h3>
                <h3>Weight (in g): ${elem['weight']}</h3>
                <h3>Type of food: ${elem['type_of_food']}</h3>
                <h3>Amount being fed (in g): ${elem['amount_being_fed']}</h3>
                <h3>Poop color: ${elem['poop_color']}</h3>
                <h3>Time outside cage (in min): ${elem['time_outside_cage']}</h3>
                <button onclick="deleteCard(${elem['pet_id']})">Delete</button>
                </div>
            `

            petList.innerHTML += petCard
        })
    })
}

function getSpecies() {
    axios.get('http://localhost:4050/species')
        .then(res => {
            res.data.forEach(species => {
                const option = document.createElement('option')
                option.setAttribute('value', species['species_id'])
                option.textContent = species.name
                speciesSelect.appendChild(option)
            })
        })
}

getSpecies()
getPet()
form.addEventListener('submit', handleSubmit)