// Importar los modulos
const modeloProductos = require('../modelo/modelo.productos')

//exportar los modulos que vamos a utilizar
module.exports.listarProductos = async (idcategoria)=> {
    try {
        // const id = JSON.stringify(idcategoria)
        const resultado = await modeloProductos.obtenerProductos(idcategoria)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}

module.exports.agregarProducto= async (productos)=> {
    try {
        const resultado = await modeloProductos.altaProducto(productos)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}

module.exports.eliminarProducto = async (Id_Producto) => {
    try{
        const resultado = await modeloProductos.bajaProducto(Id_Producto)
        
    }
    catch(error){
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }

}