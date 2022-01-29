FROM node:16
#Crear directorio para la aplicacion 
WORKDIR /usr/src/app
#Importar el archivo json del proyecto
COPY package*.json ./
#Instalar complementos del archivo 
RUN npm install
#copiar todos los archivos del proyecto
COPY . .
#publicar puerto 
EXPOSE 5000
CMD [ "node", "Servidor.js"]