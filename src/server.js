const express =  require ('express');
require('dotenv').config();
const routes = require('./routes');
const app = express()


app.use(express.json())
app.use(routes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next()
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))