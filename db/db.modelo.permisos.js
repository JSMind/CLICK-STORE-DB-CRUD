//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection')

//Defino los modelos de DB que voy a utilizar

const Permisos = sequelize.define('permisos' , {
    Tipo_Usuario: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    
    Descripcion: {
        type: DataTypes.STRING(20),
        allowNull: false,       
    }
}, {
    timestamps: false
})


module.exports = Permisos