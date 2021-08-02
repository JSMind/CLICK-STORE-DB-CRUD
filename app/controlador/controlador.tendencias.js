// Importar los modulos
const modeloProductos = require('../modelo/modelo.tendencias')

//exportar los modulos que vamos a utilizar
module.exports.listarProductos = async ()=> {
    try {
        const resultado = await modeloProductos.listarProductos()
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}

module.exports.agregarProductosCalzados = async (productos)=> {
    let newProducto = [
        productos.id,
        productos.title,
        productos.price,
        productos.thumbnail,
        productos.descripcion,
        productos.stock,
        productos.createdAt,
        productos.updatedAt
      ]
    try {
        const resultado = await modeloProductos.agregarProductosCalzados(newProducto)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Desde el controlador paso algo')
    }
}