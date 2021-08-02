const sequelize = require('../../db/db.conection');

module.exports.listarProductos = async () => {
  try {
    let resultado = await sequelize.query('SELECT * FROM Productos')
    console.log(resultado)
    return resultado[0]
  } catch (err) {
    console.log(error)
    throw new Error ('Ocurrio un error en la consulta de usuarios')
  }
}

module.exports.agregarProductosCalzados = async (productos) => {
  try {
    let resultado = await sequelize.query(`INSERT INTO Productos(Id_Producto, Nombre_Producto, Precio, Url_Imagen, Descripcion, Stock, createdAt,updatedAt ) VALUES (?,?,?,?,?,?,?,?)`,
    {replacements: productos, type: sequelize.QueryTypes.SELECT});
    console.log(resultado)
    return resultado
  } catch(err) {
    console.log(err)
    throw new Error('Ocurrio un error al agregar los productos a la base de datos')
  }
}