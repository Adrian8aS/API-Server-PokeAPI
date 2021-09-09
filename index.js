// Import packages
const express = require('express')
const axios = require('axios')
const morgan = require('morgan')

// Using packeges
const app = express()

// Set port for APP
let port = process.env.PORT || 8080

// Middleware
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send("<h1> Bienvenido </h1>")
})

app.get('/health', (req, res) => {
    res.status(200).send("<h1> OK! </h1>")
})

// Defininn Routes POST

// Get info by characters or number
app.post('/Identifier/Pokemon', (req, res) => {

    // Route creation
    const {info} = req.body
    const END_POINT = "https://pokeapi.co/api/v2/pokemon"

    // Route checker
    console.log("Ruta: ",`${END_POINT}/${info}`);

    let result = {id:'',name:'',abilities:[],types:[]}

    axios.get(`${END_POINT}/${info}`)
        .then(function (response){
            const {id, name, abilities, types} = response.data

            result.id = id
            result.name =name

            abilities.forEach(element => {
                result.abilities.push(element.ability.name)
            });
            types.forEach(element => {
                result.types.push(element.type.name)
            });
            
            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Get info by abilities or id
app.post('/Identifier/Abilities', (req, res) => {

    // Route creation
    const {info} = req.body
    const END_POINT = "https://pokeapi.co/api/v2/ability"

    // Route checker
    console.log("Ruta: ",`${END_POINT}/${info}`);

    let result = {id:'',name:'',effect:[],count:0,pokemon:[]}

    axios.get(`${END_POINT}/${info}`)
        .then(function (response){
            const {id, name, effect_entries, pokemon} = response.data

            result.id = id
            result.name =name
            let i = 0

            effect_entries.forEach(element => {
                if(element.language.name == 'en'){
                    result.effect.push(element.short_effect)
                }
            });
            pokemon.forEach(element => {
                result.pokemon.push(element.pokemon.name)
                i++
            });

            result.count = i
            
            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Get info by item or id
app.post('/Identifier/Items', (req, res) => {

    // Route creation
    const {info} = req.body
    const END_POINT = "https://pokeapi.co/api/v2/item"

    // Route checker
    console.log("Ruta: ",`${END_POINT}/${info}`);

    let result = {id:'',name:'',category:'',effect:[]}

    axios.get(`${END_POINT}/${info}`)
        .then(function (response){
            const {id, name, category, effect_entries} = response.data

            result.id = id
            result.name = name
            result.category = category.name
            
            effect_entries.forEach(element => {
                if(element.language.name == 'en'){
                    result.effect.push(element.short_effect)
                }
            });
            
            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Get info by move or id
app.post('/Identifier/Moves', (req, res) => {

    // Route creation
    const {info} = req.body
    const END_POINT = "https://pokeapi.co/api/v2/move"

    // Route checker
    console.log("Ruta: ",`${END_POINT}/${info}`);

    let result = {id:'',name:'',type:'',damage_class:'',power:'',
                accuracy:'',pp:'',priority:'',target:'',effect:[]}

    axios.get(`${END_POINT}/${info}`)
        .then(function (response){
            const {id, name, damage_class, power, pp, accuracy,
                priority, target, type, effect_entries} = response.data

            result.id = id
            result.name = name
            result.damage_class = damage_class.name
            result.type = type.name
            result.power = power
            result.pp = pp
            result.priority = priority
            result.target = target.name
            result.accuracy = accuracy
            
            effect_entries.forEach(element => {
                if(element.language.name == 'en'){
                    result.effect.push(element.short_effect)
                }
            });
            
            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Get Pokemon by type
app.post('/Pokemon/Type', (req, res) => {

    // Route creation
    const {type} = req.body
    const END_POINT = "https://pokeapi.co/api/v2/type"

    // Route checker
    console.log("Ruta: ",`${END_POINT}/${type}`);

    let result = {id:'',name:'',count:0,pokemon:[]}

    axios.get(`${END_POINT}/${type}`)
        .then(function (response){
            const {id, name, pokemon} = response.data

            result.id = id
            result.name = name
            let i = 0
           
            pokemon.forEach(element => {
                result.pokemon.push(element.pokemon.name)
                i++
            });

            result.count = i

            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Defininn Routes GET

// Get random team
app.get('/Random/Team', (req, res) => {

    const END_POINT = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"

    // Route checker
    console.log("Ruta: ",END_POINT);

    let result = {pokemon_team:[]}

    axios.get(END_POINT)
        .then(function (response){
            const {results} = response.data

            let all = []

            results.forEach(element => {
                all.push(element.name)
            });
            
            result.pokemon_team[0] = all[Math.round(Math.random()*1117)]
            result.pokemon_team[1] = all[Math.round(Math.random()*1117)]
            result.pokemon_team[2] = all[Math.round(Math.random()*1117)]
            result.pokemon_team[3] = all[Math.round(Math.random()*1117)]
            result.pokemon_team[4] = all[Math.round(Math.random()*1117)]
            result.pokemon_team[5] = all[Math.round(Math.random()*1117)]

            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Get all berries
app.get('/Berries', (req, res) => {

    const END_POINT = "https://pokeapi.co/api/v2/berry/?offset=0&limit=64"

    // Route checker
    console.log("Ruta: ",END_POINT);

    let result = {count:0,berries:[]}

    axios.get(END_POINT)
        .then(function (response){
            const {count,results} = response.data

            result.count = count

            results.forEach(element => {
                result.berries.push(element.name)
            });
            result.berries.sort()
            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Get the diferents egg-groups
app.get('/Egg/Groups', (req, res) => {

    const END_POINT = "https://pokeapi.co/api/v2/egg-group/"

    // Route checker
    console.log("Ruta: ",END_POINT);

    let result = {count:0,types:[]}

    axios.get(END_POINT)
        .then(function (response){
            const {count,results} = response.data

            result.count = count

            results.forEach(element => {
                result.types.push(element.name)
            });
            result.types.sort()
            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Get genderless pokemon
app.get('/Pokemon/Genderless', (req, res) => {

    const END_POINT = "https://pokeapi.co/api/v2/gender/3/"

    // Route checker
    console.log("Ruta: ",END_POINT);

    let result = {count:0,pokemon:[]}

    axios.get(END_POINT)
        .then(function (response){
            const {pokemon_species_details} = response.data

            let i = 0
            pokemon_species_details.forEach(element => {
                result.pokemon.push(element.pokemon_species.name)
                i++
            });
            result.count = i
            result.pokemon.sort()
            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Get genderless pokemon
app.get('/PokemonTypes', (req, res) => {

    const END_POINT = "https://pokeapi.co/api/v2/type/"

    // Route checker
    console.log("Ruta: ",END_POINT);

    let result = {count:0,types:[]}

    axios.get(END_POINT)
        .then(function (response){
            const {count,results} = response.data

            results.forEach(element => {
                result.types.push(element.name)
            });
            result.count = count
            result.types.sort()
            res.status(200).json(result)
        })
        .catch(function (error){
            console.log(error)
            const {response, message} = error
            res.status(response.status).json({ message })
        })
})

// Listen server
app.listen(port, () => {
    console.log("Server running on port "+port)
})