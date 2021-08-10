// Importar los modulos
const controladorCategorias = require('../controlador/controlador.categorias');

// Exportar los modulos:

module.exports = (app) =>{
    app.get('/categorias', async (req, res) => {                                      //Metodo para obtener las categorias locales de la base de datos
        try {
          let resultado = await controladorCategorias.listarCategorias();
          res.status(200).json({ message: "Datos recuperados exitosamente", resultado});
        } catch (err) {
            console.log('Error en las vistas de categorias');
          console.log(err.message)
          res.status(500).json({ message: "Error en el servidor", error: err.message})
        }
      });
}