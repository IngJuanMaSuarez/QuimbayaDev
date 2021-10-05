//Se encarga de comprobar que las peticiones sean correctas para poder entrar o cancelarlas si hay problemas o fallas
//Se encarga de configurar la informacion importante como base de datos o cabeceras

//Libreria express para poder utilizar el servidor de Node
const express = require('express'); 

//Modulo de express que permite trabajar con el body de la peticion
const bodyParser = require('body-parser');

//El router permite separar peticiones (cabeceras, metodos, URL)
const router = require('./network/routes');

const app = express(); //Inicializacion de express
app.use(bodyParser.json()); //Metodo para trabajar exclusivo con ficheros json
app.use(bodyParser.urlencoded({extended: false}));

router(app)

//Uso de los medios estaticos, HTML y CSS, para cargar la app
//app.use('/', express.static('public'));

//Ejecutar la aplicacion en el puerto 3000 (puerto default de las aplicaciones de Node)
app.listen(3001);

//Mensaje en consola para verificar que la aplicacion esta iniciada
console.log('La aplicacion esta escuchando en http://localhost:3001');