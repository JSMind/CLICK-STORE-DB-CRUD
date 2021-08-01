//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection')
const Permisos = require ('./db.modelo.permisos')

//Defino los modelos de DB que voy a utilizar

const Usuarios = sequelize.define('usuarios' , {
    Nombres : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Telefono: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    Fecha_Nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Contrasena: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Fk_Tipo_Usuario:{
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    Activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }   
}, {
    timestamps: true
})

Usuarios.belongsTo(Permisos, {foreignKey: 'Fk_Tipo_Usuario'});
module.exports = Usuarios