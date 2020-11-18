import app from './app'
import './database'

require('dotenv').config();

//Oir aplicacion en puerto
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})