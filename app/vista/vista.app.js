// Importación de modulos necesarios a utilizar
// const controladorProductos = require('../controlador/controlador.productos.js')

// Exportar los modulos
module.exports = (app) => {

    app.get('/home', async(req,res) => {
        try {
            // let resultado = await controladorCategorias.listarCategorias();
            // res.render('inicio', {categorias : resultado})   
            res.render('home')  

        } catch (error) {
            console.log('Error al renderizar la pagina principal');
            res.status(400).json(error.message);
        }
    });

    app.get('/signup', async(req, res) =>{
        try {
            res.render('signup')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });

    app.get('/login', async(req, res) =>{
        try {
            res.render('login')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });

    app.get('/product', async(req,res) => {
        try {
            res.render('product')  

        } catch (error) {
            console.log('Error al renderizar la pagina principal');
            res.status(400).json(error.message);
        }
    });

    app.get('/cart', async(req, res) =>{
        try {
            res.render('cart')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });

    app.get('/contact', async(req, res) =>{
        try {
            res.render('contact')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });

    app.get('/congratulations', async(req, res) =>{
        try {
            res.render('congratulations')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });
    
    app.get('/administrator', async(req, res) =>{
        try {      
            res.render('administrator')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    })    
}

    