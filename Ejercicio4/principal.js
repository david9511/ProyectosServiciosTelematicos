// 
const http =require("http");
const servidor = http.createServer
const yosay = require('yosay');
const server = http.createServer((req,res)=>{
    res.end(yosay('Prueba yosay hola mundo'));
});

const puerto = 3000;

server.listen(puerto, ()=>{
    console.log("El sevidor esta corriendo en el puerto "+puerto)
})