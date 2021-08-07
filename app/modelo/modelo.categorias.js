const sequelize = require('../../db/db.conection');
const Categorias = require('../../db/db.modelo.categorias');

module.exports.obtenerCategorias = async () => {
    try {
      let categorias = [true]
      // let resultado = await Categorias.findAll({where:{Activo: categorias [0], [Öp.not]: [{id_categoria: 'CSMLM100'}]}});
      let resultado = await sequelize.query(`SELECT * FROM Categorias WHERE NOT id_categoria='CSMLM100'`)
      console.log(resultado);
      return resultado[0];
    } catch (err) {
        console.log('Error desde el modelo de categorias');
      console.log(error);
      throw new Error ('Ocurrio un error en la consulta de categorias');
    }
  }
  