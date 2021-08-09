
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
