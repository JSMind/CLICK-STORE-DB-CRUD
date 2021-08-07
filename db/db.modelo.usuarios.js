// Importar los modulos necesarios
const {DataTypes, Model} = require('sequelize');
const sequelize = require('./db.conection');
const Permisos = require('./db.modelo.permisos');

// Definir el modelo de la tabla para la DB
const Usuarios = sequelize.define('Usuarios',{
    id_usuario:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nombres:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    apellidos:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    fecha_nacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    activo:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    contrasena:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    tipo_usuario:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'fecha_registro',
    updatedAt: 'fecha_actualizacion'
});
Usuarios.belongsTo(Permisos,{foreignKey: 'tipo_usuario'});

// Exportar el modelo
module.exports = Usuarios
