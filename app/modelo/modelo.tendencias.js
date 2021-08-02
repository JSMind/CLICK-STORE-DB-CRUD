const sequelize = require('../../db/db.conection');
const Productos = require('../../db/db.modelo.tendencias')


module.exports.obtenerProductos = async () => {
  try {
    let resultado = await sequelize.query('SELECT * FROM Productos')
    console.log(resultado)
    return resultado[0]
  } catch (err) {
    console.log(error)
    throw new Error ('Ocurrio un error en la consulta de usuarios')
  }
}

module.exports.altaProducto = async (productos) => {
  try {
    let newProducto = await Productos.create({
     Id_Producto: productos.id,
     Nombre_Producto:productos.title,
     Precio: productos.price,
     Url_Imagen:productos.thumbnail,
     Descripcion:productos.descripcion,
     Stock: productos.stock
    });
    console.log(newProducto)
    return newProducto
  } catch(err) {
    console.log(err)
    throw new Error('Ocurrio un error al agregar los productos a la base de datos')
  }
}

module.exports.bajaProducto = async (IdProducto) => {
  try{
    let bajaProducto = await Productos.destroy({where: {Id_Producto:`${IdProducto}`}})
    console.log (bajaProducto)
    
  }
  catch(error){
    console.log(error)
    throw new Error('Ocurrio un error al dar de baja el Producto de la Base de Datos')
  }

  


}