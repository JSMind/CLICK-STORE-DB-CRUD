// Importar los modulos necesarios a utilizar
const controladorTendencia = require('../controlador/controlador.tendencias')

// Exportar modulos-Creacion de los metodos get y post.
module.exports = (app) => {
  app.get('/productostendencia', async (req, res) => {
    try {
      let resultado = await controladorTendencia.listarProductos();
      res.status(200).json({ message: "Datos recuperados exitosamente", resultado})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  })

  app.post('/productostendencia', async (req, res) => {
    try {
      let productos = req.body
      console.log(productos)
      let resultado = await controladorTendencia.agregarProductosCalzados(productos)
      res.status(200).json({ message: "Productos agregados a la base de datos exitosamente", resultado})
    } catch(err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  })

}