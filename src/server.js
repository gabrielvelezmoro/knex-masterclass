const express =  require ('express');
require('dotenv').config();
const routes = require('./routes');
const app = express()


app.use(routes)

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`))