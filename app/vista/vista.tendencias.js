// Importar los modulos necesarios a utilizar
const controladorTendencia = require('../controlador/controlador.tendencias')

// Exportar modulos-Creacion de los metodos get y post.
module.exports = (app) => {
  app.get('/productostendencia/listar', async (req, res) => {
    try {
      let resultado = await controladorTendencia.listarProductos();
      res.status(200).json({ message: "Datos recuperados exitosamente", resultado})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  });

  app.post('/productostendencia/create', async (req, res) => {
    try {
      let productos = req.body
      console.log(productos)
      let resultado = await controladorTendencia.agregarProductosTendencia(productos)
      res.status(200).json({ message: "Productos agregados a la base de datos exitosamente", resultado})
    } catch(err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  });

  app.delete('/productostendencia/delete/:IdProducto', async (req,res) => {
    let Id_Producto = req.params.IdProducto;
    try {
        const resultado = await controladorTendencia.eliminarProducto(Id_Producto);
        res.status(200).json({message: 'El Producto se Elimino correctamente de la base de datos'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
    }
});

app.patch('/productostendencia/update/:IdProducto', async (req,res) => {
  let usuario = req.body;
  try {
      const desactivarUsuario = await servicioUsuario.desactivarUsuario(usuario);
      res.status(200).json({message: 'El usuario se desactivo correctamente'})
  } catch (error) {
      console.log(error.message);
      res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
  }
})

}