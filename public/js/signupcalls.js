// Declarar la clase para trabajar con localStorage
class Usuarios{
    constructor (correo,contrasena){
        this.correo = correo;
        this.contrasena = contrasena;
        // this.token = '';
    }

    static async guardarUsuario(usuario){
        localStorage.setItem('datosUsuario', JSON.stringify(usuario));
    }

    static async recuperarUsuario(){
        let usuario = await JSON.parse(localStorage.getItem('datosUsuario'));
        return usuario;
    }
}

// Función para crear un nuevo usuario y almacenarlo a la base de datos
let registroUsuario = async(usuario) => {
    try {
        let nuevoRegistro = await fetch('http://localhost:3000/usuario/registro',{
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });
        let respuesta = await nuevoRegistro.json();
        return respuesta;
    } catch (error) {
        throw new Error ('Error en la llamada para el registro de usuario')
    }
}

// Función para realizar un login
let nuevoIngreso = async (usuario) =>{
    try {
        let iniciarSesion = await fetch('http://localhost:3000/usuario/login',{
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
        let respuesta = await iniciarSesion.json();
        console.log(respuesta)
        return respuesta;
    } catch (error) {
        console.log(error)
        throw new Error ('Error en la llamada para el registro de usuario')
    }
}