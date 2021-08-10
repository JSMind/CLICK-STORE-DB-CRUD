//  Función para validar entrada de los campos del formulario de tipo texto
let validarTxt = (texto, tipo) =>{
    try {
        if(texto == null || texto.length < 4 || /^\s+$/.test(texto)){
            throw new Error (`El campo de ${tipo}, debe poseer un nombre de almenos cuatro letras`);
        } else{
            return 'Registro Valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}

let validarOtros = (datos,tipo) => {
    try {
        if(datos == null || datos == 0){
            throw new Error (`El campo de ${tipo}, no debe ser vacio`);
        } else{
            return 'Registro Valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}

let validarContrasena = (contrasena) => {
    try {
        if (contrasena == null || contrasena == 0 || contrasena.length < 8 || /^\s+$/.test(contrasena)) {
            throw new Error (`El campo de contraseña no cumple con los parametros`)
        } else {
            return 'Registro valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}

let validarEmail = (correo) => {
    try {
        
        let formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!formatoEmail.test(correo)){
            throw new Error ('Ingrese un email valido de la forma usuario@mail.com')
        } else {
            return 'Registro de email valido'
        }
    } catch (error) {
        console.log(error)
        throw new Error (error.message)
    }
}