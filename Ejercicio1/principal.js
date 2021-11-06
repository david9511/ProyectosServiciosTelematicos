//Obtener variables
const{listNombre,listEdad,listTiempo,listSalida} = require('./constantes')

//Preguntar por el nombre de usuario 
console.log('Nombre de la persona a consultar: ');
console.log('Gustavo');
var nombrePersona = 'Gustavo';

console.log('Respuesta de consulta');
//Recorrer lista nombres 
for(var i=0; listNombre.length>i;i++){
    if(listNombre[i] == nombrePersona){
    console.log('usuario: '+ listNombre[i] + ' edad: '+listEdad[i]+ ' tiempo de ejercicio: '+listTiempo[i]+ ' veces de salida: '+ listSalida[i]);
    }
}