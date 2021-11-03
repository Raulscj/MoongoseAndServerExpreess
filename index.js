require ('./conexion');
const express = require ('express');
const app = express();

//Settings
app.set('appName','Actividad III');
app.set('port',3030)

//Middlewares
app.use(express.json());

//Rutas
app.use(require('./src/routing'));

//Servidor
app.listen(app.get('port'), () => {
	console.log(`Server active on : ${app.get('port')}`);
});