const sequelize = require('../../db/db.conection');
const Productos = require('../../db/db.modelo.productos')


module.exports.obtenerProductos = async (idcategoria) => {                         //Metodo de consulta para obtener los Productos Locales de la base de datos
  try {
    let resultado = await Productos.findAll({where: {id_categoria: idcategoria }});
    return resultado
  } catch (err) {
    console.log(error)
    throw new Error ('Ocurrio un error en la consulta de usuarios')
  }
}

module.exports.altaProducto = async (productos) => {                                //Metodo de consulta para registrar un producto local en la base de datos
  try {
    let newProducto = await Productos.create({
     id_producto: productos.id_producto,
     nombre_producto:productos.title,
     precio: productos.price,
     url_imagen:productos.thumbnail,
     descripcion:productos.descripcion,
     stock: productos.stock,
     id_categoria: productos.id_categoria
    });
    console.log(newProducto)
    return newProducto
  } catch(err) {
    console.log(err)
    throw new Error('Ocurrio un error al agregar los productos a la base de datos')
  }
}

module.exports.bajaProducto = async (IdProducto) => {                               //Metodo de consulta para eliminar un producto local en la base de datos
  try{
    let bajaProducto = await Productos.destroy({where: {id_producto:`${IdProducto}`}})
    console.log (bajaProducto)
    
  }
  catch(error){
    console.log(error)
    throw new Error('Ocurrio un error al dar de baja el Producto de la Base de Datos')
  }
}  

  module.exports.actualizarProducto = async (producto) => {                        //Metodo de consulta para actualizar los datos de un producto local en la base de datos
  try{
    
    let resultado = await sequelize.query(`UPDATE Productos SET  nombre_producto='${producto.title}',
                                                                 precio='${producto.price}',
                                                                 url_imagen='${producto.thumbnail}',
                                                                 descripcion='${producto.descripcion}',
                                                                 stock='${producto.stock}',
                                                                 id_categoria='${producto.id_categoria}'
                                                                 WHERE id_producto='${producto.id_producto}'`)
    console.log (resultado)
  
  }
  catch(error){
    console.log(error)
    throw new Error('Ocurrio un error al Actualizar el Producto de la Base de Datos')
  }

}