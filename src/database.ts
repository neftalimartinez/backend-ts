import mongoose from 'mongoose'


require('dotenv').config();

//add String to typesript
mongoose.connect(String(process.env.DATABASE), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => { console.log("Conexion BD Exitosa")})
.catch(err => console.error(err));

