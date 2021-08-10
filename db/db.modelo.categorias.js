const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection')

//Datos que contendra la tabla Categorias

const Categorias = sequelize.define('Categorias' , {
    id_categoria : {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true
    },
    nombre_categoria : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    activo:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false
    }

}, {
    timestamps: true
})

module.exports = Categorias