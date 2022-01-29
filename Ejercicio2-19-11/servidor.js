//Importe el módulos
const express = require("express");
const app = express();
const puerto = 5000;
//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');
//Atención de la solicitud
app.get('/', (req,res)=>{
    res.render("index", {nombre:"Oscar",
                        apellido:"cruz",
                        edad:"25",
                        estudios: "telecomunicacioens"
                    })
});

app.get('/familiar', (req,res)=>{
    res.render("index", {nombre:"Pepita",
                        apellido:"Ruiz",
                        edad:"26",
                        estudios: "Administradora"
                    })
});
//Oyente
app.listen(puerto, () => {
    console.log("Ejecutando express");
});

