//Importe el módulos
const express = require("express");
const app = express();
const puerto = 5000;
let listaProductos = [];
//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/public"))

listaProductos.push('1'),
listaProductos.push('2');
listaProductos.push('3');


//Atención de la solicitud
app.get('/', (req, res) => {
    res.render("index", {
        listaProductos
    })
});

app.post('/', (req, res) => {
    listaProductos.push(listaProductos.length + 1);
    res.render("index", {
        listaProductos
    })
});







//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});

