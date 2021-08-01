//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection')
const Usuarios = require ('./db.modelo.usuarios')
const Productos = require ('./db.modelo.productos')

//Defino los modelos de DB que voy a utilizar

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

Compras.belongsTo(Usuarios, {foreignKey: 'Id_Usuario'}); 
Compras.belongsTo(Productos, {foreignKey: 'Id_Producto'}); 


module.exports = Productos