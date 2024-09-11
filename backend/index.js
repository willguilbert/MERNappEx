/*

    Starter lapp avec
                 node --env-file=.env .
    On doit avoir les variables DB_URL, DB_COLL et PORT.

*/
require("dotenv").config();

const express = require('express') ;
const cors = require('cors');
const mongoose = require('mongoose')
const City = require('./models/City')

const app = express()
const PORT = process.env.PORT;
const DB_URL =  process.env.DB_URL

mongoose.connect(DB_URL);


app.use(express.json())
app.use(cors());


app.get('/city', async (req, res)=> {
    try{
        const cities = await City.find();
        res.status(200).json(cities) ;
    }catch(error){
        res.status(500).json({error : error.message})
    }
});

app.listen(
    PORT,
    () => console.log("im up! ")
)

// app.post("/city/:id", (req, res) => {
//     const {id} = req.params ;
//     const {name} = req.body ;
//     if(!name){
//         res.status(418).send({message : "The city needs a name!"})
//     }
//     res.status(200).send({message : "Successfully added the city !"})
// })