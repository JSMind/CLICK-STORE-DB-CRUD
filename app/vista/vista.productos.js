// Importar los modulos necesarios a utilizar
const controladorProductos = require('../controlador/controlador.productos')

// Exportar modulos-Creacion de los metodos get y post.
module.exports = (app) => {
  app.get('/productos/categoria:idcategoria', async (req, res) => {
    try {
      idcategoria = req.params.idcategoria;
      let resultado = await controladorProductos.listarProductos(idcategoria);
      res.status(200).json({ message: "Datos recuperados exitosamente", resultado})
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  });

  app.post('/productos/create', async (req, res) => {
    try {
      let productos = req.body
      console.log(productos)
      let resultado = await controladorProductos.agregarProducto(productos)
      res.status(200).json({ message: "Productos agregados a la base de datos exitosamente", resultado})
    } catch(err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  });

  app.delete('/productos/delete/:IdProducto', async (req,res) => {
    let Id_Producto = req.params.IdProducto;
    try {
        const resultado = await controladorProductos.eliminarProducto(Id_Producto);
        res.status(200).json({message: 'El Producto se Elimino correctamente de la base de datos'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
    }
});

app.patch('/productos/update/:IdProducto', async (req,res) => {
  let Id= req.body;
  try {
      const desactivarUsuario = await controladorProductos.desactivarProducto(Id);
      res.status(200).json({message: 'El Producto se desactivo correctamente'})
  } catch (error) {
      console.log(error.message);
      res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
  }
})

}



