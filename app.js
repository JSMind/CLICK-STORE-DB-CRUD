// Importación de modulos necesarios a utilizar
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./db/db.conection');
const Usuarios = require('./db/db.modelo.usuarios');
const Permisos = require('./db/db.modelo.permisos');
const Productos = require('./db/db.modelo.productos');


// const appRoute = require('./routes/app.routes')
// const trendRoute = require('./routes/trend.routes');
// const usuariosRoute = require('./routes/user.routes');
// const midd = require('./midd/midd');



// Middlewares globales
app.use(express.json());
app.use(cors());
// app.use(midd.limite);

// Inicializamos nuestro servidor
async function iniciarServidor(){
    try {
        await Productos.sync({alter:true});
        await Permisos.sync({alter:true});
        await Usuarios.sync({alter:true});
        await sequelize.authenticate();
        console.log('Se establecio una conexión exitosa con la base de datos');
        app.listen(process.env.PORT, () => {
            console.log(`El servidor se ha iniciado correctamente en: ${process.env.HOST}:${process.env.PORT}`)
        });
    }catch(error) {
        console.log(`No se conecto con  la base de datos: ${error}`);
    }
}

iniciarServidor();


// Inicialización de las rutas

