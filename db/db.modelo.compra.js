//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection')
const Usuarios = require ('./db.modelo.usuarios')
const Productos = require ('./db.modelo.productos')

//Datos que contendra la tabla Compras

const Compras = sequelize.define('Compras' , {
    Id_Compra: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Id_Usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Id_Producto : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
   
   
}, {
    timestamps: true
})

Compras.belongsTo(Usuarios, {foreignKey: 'Id_Usuario'});  //Especificacion de foreignKey que asociara la tabla Compras con la Tabla Usuarios.
Compras.belongsTo(Productos, {foreignKey: 'Id_Producto'}); //Especificacion de foreignKey que asociara la tabla Compras con la Tabla Productos.


module.exports = Productos