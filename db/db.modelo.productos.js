//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection')

//Defino los modelos de DB que voy a utilizar

const Productos = sequelize.define('Productos' , {
    Id_Producto : {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true
    },
    Nombre_Producto : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Url_Imagen: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    Descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }  
    
}, {
    timestamps: true
})

module.exports = Productos