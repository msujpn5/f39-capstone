require('dotenv').config()

const Sequelize = require('sequelize')
const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists species;
            drop table if exists pet;

            CREATE TABLE species (
                species_id SERIAL PRIMARY KEY,
                name varchar
            );

            CREATE TABLE pet (
                pet_id SERIAL PRIMARY KEY,
                bird_name VARCHAR,
                bird_age INT,
                weight INT,
                type_of_food VARCHAR,
                amount_being_fed INT,
                poop_color VARCHAR,
                time_outside_cage INT
                species_id INT REFERENCES species(species_id)
            );

            INSERT INTO species (name)
            VALUES ('African Grey Parrot'),
            ('Alexandrine Parakeet'),
            ('Amazon Parrot'),
            ('Blue-and-Gold Macaw'),
            ('Blue-Crowned Conure'),
            ('Blue-Headed Pionus'),
            ('Budgie'),
            ('Caique'),
            ('Canary'),
            ('Cockatiel'),
            ('Cockatoo'),
            ('Conure'),
            ('Crimson Rosella'),
            ('Diamond Dove'),
            ('Double Yellow-Headed Amazon Parrot'),
            ('Dove'),
            ('Eclectus'),
            ('Finch'),
            ('Fischers Lovebird'),
            ('Galah Cockatoo'),
            ('Goffins Cockatoo'),
            ('Golden-Mantled Rosella'),
            ('Gouldian Finch'),
            ('Green-Cheeked Conure'),
            ('Green-Winged Macaw'),
            ('Hahns Macaw'),
            ('Hyacinth Macaw'),
            ('Indian Ring-Necked Parakeet'),
            ('Jenday Conure'),
            ('Lilac-Crowned Amazon'),
            ('Lory').
            ('Lovebird'),
            ('Macaw'),
            ('Meyers Parrot'),
            ('Moluccan Cockatoo'),
            ('Orange-Winged Amazon Parrot'),
            ('Owl Finch'),
            ('Pacific Parrotlet'),
            ('Parrot'),
            ('Pionus Parrot'),
            ('Poicephalus'),
            ('Psittacula'),
            ('Quaker Parakeet'),
            ('Rainbow Lory'),
            ('Red Lorry'),
            ('Red-Factor Canary'),
            ('Ring-Necked Dove'),
            ('Rosella'),
            ('Scarlet Macaw'),
            ('Senegal Parrot'),
            ('Song Canary'),
            ('Sun Conure'),
            ('Umbrella Cockatoo'),
            ('Vasa Parrot'),
            ('White-Capped Pionus')
            ('Yellow-Naped Amazon Parrot'),
            ('Zebra Finch');
        `).then(() => {
            console.log('database seeded')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding database', err))
    },

    getSpecies: (req, res) => {
        sequelize.query(`
        SELECT * FROM species
        `)
        .then((dbRes) => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    createPet: (req, res) => {
        const {birdName, birdAge, weight, typeOfFood, amountBeingFed, poopColor, timeOutsideCage, speciesId} = req.body

        
    }
}