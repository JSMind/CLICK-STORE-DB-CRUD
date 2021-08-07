// const sequelize = require('../../db/db.conection');
const Categorias = require('../../db/db.modelo.categorias');

module.exports.obtenerCategorias = async () => {
    try {
      let categorias = [true]
      let resultado = await Categorias.findAll({where:{Activo: categorias [0]}});
      console.log(resultado);
      return resultado;
    } catch (err) {
        console.log('Error desde el modelo de categorias');
      console.log(error);
      throw new Error ('Ocurrio un error en la consulta de categorias');
    }
  }
  