// Importar los modulos necesarios a utilizar
const controladorProductos = require('../controlador/controlador.productos')

// Exportar modulos - Creacion de los metodos get, post, update y delete para los productos locales
module.exports = (app) => {
  app.get('/productos/categoria:idcategoria', async (req, res) => {                   //Metodo para obtener los productos locales por categoria
    try {
      
      idcategoria = req.params.idcategoria;
      let resultado = await controladorProductos.listarProductos(idcategoria);
      res.status(200).json({ message: "Datos recuperados exitosamente", resultado})

    } catch (err) {
      console.log(err.message)
      res.status(500).json({ message: "Error en el servidor", error: err.message})
    }
  });

  app.post('/productos/create', async (req, res) => {                                   //Metodo para crear los productos locales por categoria
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

  app.delete('/productos/delete/:IdProducto', async (req,res) => {                       //Metodo para eliminar permanentemente los productos locales por Id del producto
    let Id_Producto = req.params.IdProducto;
    try {
        console.log("entro al servidor", Id_Producto)
        const resultado = await controladorProductos.eliminarProducto(Id_Producto);
        res.status(200).json({message: 'El Producto se Elimino correctamente de la base de datos'});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
    }
});

app.post('/productos/update', async (req,res) => {                                          //Metodo para actualizar datos de los productos locales
  let producto = req.body;
  try {
      const actualizarProducto = await controladorProductos.actualizarProducto(producto);
      
      res.status(200).json({message: 'El Producto se actualizo correctamente', actualizarProducto})
 
    } catch (error) {
      console.log(error.message);
      res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
  }
})

}



