//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection');
const Categorias = require ('./db.modelo.categorias');

//Datos que contendra la tabla Productos

const Productos = sequelize.define('Productos' , {
    id_producto : {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true
    },
    nombre_producto : {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    url_imagen: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_categoria: {
        type: DataTypes.STRING(50),
        allowNull: false 
    }

}, {
    timestamps: true,
    createdAt: 'Fecha_Registro',
    updatedAt: 'Fecha_Actualizacion'
});

Productos.belongsTo(Categorias, {foreignKey: 'id_categoria'}); //Especificacion de foreignKey que asociara la tabla Productos con la Tabla Categorias


module.exports = Productos