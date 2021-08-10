// Importación de modulos necesarios a utilizar
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const sequelize = require('./db/db.conection');
const Usuarios = require('./db/db.modelo.usuarios');
const Permisos = require('./db/db.modelo.permisos');
const Productos = require('./db/db.modelo.productos');
const Categorias = require('./db/db.modelo.categorias');

const vistaApp = require('./app/vista/vista.app');
const vistaProductos= require('./app/vista/vista.productos');
const vistaUsuarios = require('./app/vista/vista.usuarios');
const vistaCategorias = require('./app/vista/vista.categorias');

const middUsuarios = require('./middlewares/midd.usuarios');



// Middlewares globales
app.use(express.json());
app.use(cors());
app.use(middUsuarios.limiteConsultas);

//Configuraciones globales
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


// Inicializamos nuestro servidor
async function iniciarServidor(){
    try {
        await Categorias.sync({alter:true});
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


// Inicialización de las vistas
vistaCategorias(app);
vistaApp(app);
vistaProductos(app);
vistaUsuarios(app);
