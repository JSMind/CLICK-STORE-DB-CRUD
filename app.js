// Importación de modulos necesarios a utilizar
const express = require('express');
const app = express();                                          
require('dotenv').config();
const cors = require('cors');                                   
const sequelize = require('./db/db.conection');                 //Es el modulo para realizar nuestra conexion con la base de datos.
const Usuarios = require('./db/db.modelo.usuarios');            //Usuarios, Productos, Categorias y Permisos son los modulos que crean las tablas de la base de datos.
const Productos = require('./db/db.modelo.productos');              
const Categorias = require('./db/db.modelo.categorias');
const Permisos = require ('./db/db.modelo.permisos');
const vistaApp = require('./app/vista/vista.app');              //Es el modulo donde se encuentran los metodos para renderizar las paginas principales en ejs que se encuentran en la carpeta Views.
const vistaProductos= require('./app/vista/vista.productos');   //Es el modulo donde se encuentran los metodos para realizar el CRUD de los Productos Locales.
const vistaUsuarios = require('./app/vista/vista.usuarios');    //Es el modulo donde se encuentran los metodos para realizar el CRUD  de los usuarios, como tambien para validar a los usuarios y generar su respesctivo token.
const vistaCategorias = require('./app/vista/vista.categorias');//Es el modulo donde se encuentra el metodo que accede a las categorias propias locales de la base de datos.

const middUsuarios = require('./middlewares/midd.usuarios');    //Es el modulo que contiene los Middlewares de seguridad de acceso al servidor, las validaciones de datos y peticiones del usuario mediante el token.



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
        await Categorias.sync({alter:true});            //Sincronizacion al iniciar el servidor con las tablas de la base de dtos.
        await Productos.sync({alter:true});
        await Permisos.sync({alter:true});
        await Usuarios.sync({alter:true});

        await sequelize.authenticate();                 //Autenticacion con la base de datos
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
