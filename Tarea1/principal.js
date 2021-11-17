const express = require("express");
const app = express();
const puerto = 5000;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var objeto = {
    nombre: '',
    edad: '',
    genero: '',
    telefono: ''
};
var listaUsuarios = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/formulario1.html'));
});

app.post('/', (req, res) => {
    var objeto = {
        nombre: '',
        edad: '',
        genero: '',
        telefono: ''
    };
    //var mensaje = req.body.user_name;
    objeto.nombre = req.body.userNombre;
    objeto.edad = req.body.userEdad,
    objeto.genero = req.body.userGenero,
    objeto.telefono = req.body.userTelefono
    listaUsuarios.push(objeto);
    //console.log(listaUsuarios)
    res.sendFile(path.join(__dirname, '/formulario1.html'));
    //res.send('la lista ' + listaUsuarios.forEach(objeto => console.log(objeto)));
});

app.get('/terminal', (req, res) => {
    console.log(listaUsuarios);
    res.send('terminal');  
});

app.get('/terminal2', (req, res) => {
    listaUsuarios.forEach(element => console.log('nombre: '+ element.nombre+' Telefono: '+element.telefono) );
    res.send('terminal2');  
});

app.get('/web1', (req, res) => {
    var nombres = '';
    listaUsuarios.forEach(element => nombres = nombres + '</br>'+ element.nombre);
    res.send('Lista de nombres :  </br>'+ nombres);  
});

app.get('/web2', (req, res) => {
    var nombres = '';
    listaUsuarios.forEach(element => nombres = nombres + '</br> nomb: '+ element.nombre + ' Gen : '+element.genero);
    res.send('Lista de nombres y genero :  </br>'+ nombres);  
});

app.listen(puerto, () => {
    console.log("Ejecutando Express")
})
