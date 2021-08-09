const sequelize = require('../../db/db.conection');
const Productos = require('../../db/db.modelo.productos')


module.exports.obtenerProductos = async (idcategoria) => {
  try {
    let resultado = await Productos.findAll({where: {id_categoria: idcategoria }});
    // let resultado = await sequelize.query(`SELECT * FROM Productos WHERE id_categoria='${idcategoria}'`)
    // console.log(resultado)
    return resultado
  } catch (err) {
    console.log(error)
    throw new Error ('Ocurrio un error en la consulta de usuarios')
  }
}

module.exports.altaProducto = async (productos) => {
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

module.exports.bajaProducto = async (IdProducto) => {
  try{
    let bajaProducto = await Productos.destroy({where: {id_producto:`${IdProducto}`}})
    console.log (bajaProducto)
    
  }
  catch(error){
    console.log(error)
    throw new Error('Ocurrio un error al dar de baja el Producto de la Base de Datos')
  }



}