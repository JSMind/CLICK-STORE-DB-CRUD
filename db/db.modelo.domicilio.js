//Importo los modulos necesarios
const {DataTypes, Model } = require('sequelize');
const sequelize = require('./db.conection')

// Exportamos los modulos
const Domicilio = sequelize.define('Domicilio' , {
    Id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    País : {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Estado: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Municipio: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Colonia: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Calle: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Num_ext: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Num_int:{
        type: DataTypes.STRING(10),
        allowNull: false 
    },
    CP:{
        type: DataTypes.STRING(10),
        allowNull: false 
    }  
}, {
    timestamps: true
})

Domicilio.belongsTo(Usuarios, {foreignKey: 'Id_usuario'});