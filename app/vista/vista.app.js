// Importación de modulos necesarios a utilizar

// Exportar los modulos
module.exports = (app) => {

    app.get('/home', async(req,res) => {                            //Vista que renderiza la pagina Home
        try { 
            res.render('home')  
        } catch (error) {
            console.log('Error al renderizar la pagina principal');
            res.status(400).json(error.message);
        }
    });

    app.get('/signup', async(req, res) =>{                          //Vista que renderiza la pagina SignUp
        try {
            res.render('signup')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });

    app.get('/login', async(req, res) =>{                            //Vista que renderiza la pagina Login
        try {
            res.render('login')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });

    app.get('/product', async(req,res) => {                           //Vista que renderiza la pagina que muestra los Productos
        try {
            res.render('product')  

        } catch (error) {
            console.log('Error al renderizar la pagina principal');
            res.status(400).json(error.message);
        }
    });

    app.get('/cart', async(req, res) =>{                               //Vista que renderiza la pagina que contiene el carrito de compras y datos de Domicilio
        try {
            res.render('cart')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });

    app.get('/contact', async(req, res) =>{                            //Vista que renderiza la pagina contacto
        try {
            res.render('contact')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });

    app.get('/congratulations', async(req, res) =>{                     //Vista que renderiza la pagina de Agradecimientos
        try {
            res.render('congratulations')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    });
    
    app.get('/administrator', async(req, res) =>{                        //Vista que renderiza la pagina de Administrador
        try {      
            res.render('administrator')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    })    
}

    