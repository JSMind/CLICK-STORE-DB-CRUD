
//  Función para validar entrada de los campos del formulario de tipo Alfanumerico de longitud maxima 25
let validarId = (datos,tipo) => {
    try {
        if (datos == null || datos == 0 || !(/^([a-zA-Z0-9_-]){1,25}$/.test(datos))) {
            throw new Error (`El campo de ${tipo} no es correcto, ingrese nuevamente un valor valido para este campo`)
        } else {
            return 'Registro valido'
        }
    } catch (error) {
        // console.log(error)
        throw new Error (error.message)
    }
}

