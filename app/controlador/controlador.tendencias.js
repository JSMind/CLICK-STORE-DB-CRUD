// Importar los modulos
const modeloProductos = require('../modelo/modelo.tendencias')

//exportar los modulos que vamos a utilizar
module.exports.listarProductos = async ()=> {
    try {
        const resultado = await modeloProductos.obtenerProductos()
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}

module.exports.agregarProductosTendencia = async (productos)=> {
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