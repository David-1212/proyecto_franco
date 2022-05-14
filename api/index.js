const conexion = require("./coneccion/Coneccion")
const cors = require('cors');
var express = require("express");

var app = express();

conexion()
app.use(cors());
app.use(express.json());
app.use("/api/", require ("./rutas/rutes") )
var server = app.listen(4000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

