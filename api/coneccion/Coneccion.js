const mongoose = require('mongoose');

const dbConnection = async() => {



    try {
        await mongoose.connect("mongodb+srv://vargas2000:Pegos2000@cluster0.dczaj.mongodb.net/CRUD");
        console.log (
            "coneccion correcta"
        )
    } catch (error) {
        throw new Error('Error al inicializar la BD');
    } 

}

module.exports = dbConnection;