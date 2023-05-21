const express =  require ('express');
const knex = require('./database');
const app = express()
require('dotenv').config();

app.get('/users', (req, res) => {
    knex('users').then((results)=>{
        return res.json(results)
    })
})

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))