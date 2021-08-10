const Sequelize = require('sequelize');                     //Importacion de la libreria squelize para realizar la conexion a la base de datos             


const sequelize = new Sequelize('ClickStoreDB',null,null,{  
    dialect: 'mssql',
    server: process.env.DB_HOST,                             //Datos de acceso a la base de datos
    port: process.env.DB_PORT,
    dialectOptions:{
        authentication:{
            type: 'default',
            options:{
                encrypt: true,
                userName: process.env.DB_USER,
                password: process.env.DB_PASS
            }
        }
    }
});

module.exports = sequelize;