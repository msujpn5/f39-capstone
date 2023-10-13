require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 4050
const {seed, getSpecies, getPet, createPet, deletePet} = require('./controller.js')

app.use(express.json())
app.use(express.static(__dirname + "/../public"))
app.use(cors())

app.post('/seed', seed)

app.get('/species', getSpecies)

app.post('/pet', createPet)
app.get('/pet', getPet)
app.delete('/pet/:id', deletePet)

app.listen(port, () => console.log(`up on ${port}`))

