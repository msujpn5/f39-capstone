require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getSpecies, getPet, createPet, deletePet} = require('./controller.js')

app.use(express.json())
app.use(express.static(__dirname + "/../public"))
app.use(cors())

app.post('/seed', seed)

app.get('/species', getSpecies)

app.post('/pet', createPet)
app.get('/pet', getPet)
app.delete('/pet/:id', deletePet)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

