// Importar los modulos a utilizar
const jwt = require('jsonwebtoken')
const modeloUsuarios = require('../modelo/modelo.usuarios');

// Exportar los modulos
let generarToken = async(usuario) => {                              //Controlador que genera el token
    try {
        const token = jwt.sign({usuario}, process.env.SECRET_KEY);  //Tiempo máximo de validez de 15 min
        return token;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let verificarUsuario = async(token) =>{                             //Controlador que verifica el token con la Secret Key 
    try {
        const validacion = jwt.verify(token, process.env.SECRET_KEY);
        if(validacion){
            return validacion;
        }else{
            throw new Error('Token no valido')
        }

    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let inspeccionarUsuario = async(usuario) =>{                           // Controlador que conecta con el metodo insepeccionarUsuario para realizar la validacion de los datos de acceso
    try {
        let usuarioValido = await modeloUsuarios.inspeccionarUsuario(usuario);
        if (usuarioValido){
            return usuarioValido;
        }else{
            throw new Error('Usuario no valido')
        }
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let listarUsuarios = async () => {                                      //Controlador que conecta con el metodo consultaUSuarios para listar todos los usuarios
    try {
        let consultaUsuarios = await modeloUsuarios.consultaUsuarios();
        return consultaUsuarios;
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

let crearUsuario = async (usuario) => {                                  //Controlador que conecta con el metodo crearUsuarios para la creacion de un Usuario
    try {
        let nuevoUsuario = await modeloUsuarios.crearUsuario(usuario)
        return nuevoUsuario;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

let eliminarUsuario = async (idUsuario) => {                            //Controldor que conecta con el metodo eliminarUsuario para la eliminacion de un Usuario 
    try {
        let borrarUsuario = await modeloUsuarios.eliminarUsuario(idUsuario);
    } catch (error) {
        console.log(error);
        throw new Error('Ocurrio un error desde el controlador');
    }
}

module.exports = {generarToken, verificarUsuario, inspeccionarUsuario, listarUsuarios, crearUsuario, eliminarUsuario}