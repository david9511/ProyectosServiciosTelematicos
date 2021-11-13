//
const express = require("express");

const app= express();
const puerto = 5000;

const path = require('path');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/formulario.html'));
});

app.post('/',(req,res)=>{
    var mensaje = req.body.user_name;
    console.log(mensaje)
    res.send('El mensaje era '+mensaje);
});

app.listen(puerto, ()=>{
    console.log("Ejecutando Express")})

/*
app.get('/', (req,res)=>{
    res.send("Hola curso usando express")
});

app.get('/prueba', (req,res)=>{
    res.send("Hola curso usando express")
});

server.listen(puerto, ()=>{
    console.log("Ejecutando Express")
})*/