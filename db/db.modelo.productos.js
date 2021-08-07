//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection');
const Categorias = require ('./db.modelo.categorias');

//Defino los modelos de DB que voy a utilizar

const Productos = sequelize.define('Productos' , {
    id_producto : {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true
    },
    nombre_producto : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    url_imagen: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(100),
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

Productos.belongsTo(Categorias, {foreignKey: 'id_categoria'});


module.exports = Productos