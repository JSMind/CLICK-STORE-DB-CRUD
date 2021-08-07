// Importación de modulos necesarios a utilizar
const controladorCategorias = require('../controlador/controlador.categorias')
const fetch = require('node-fetch');

// Funciones a emplear
// async function getApi(url){
//     const respuesta = await fetch(url);
//     const datos = await respuesta.json();
//     return datos;
// }

// Exportar los modulos
module.exports = (app) => {

    app.get('/inicio', async(req,res) => {
        try {
            // let resultado = await controladorCategorias.listarCategorias();
            // res.render('inicio', {categorias : resultado})   
            res.render('inicio')  

        } catch (error) {
            console.log('Error al renderizar la pagina principal');
            res.status(400).json(error.message);
        }
    });

    app.get('/mostrandoproductos', async(req,res) => {
        try {
            res.render('producto')  

        } catch (error) {
            console.log('Error al renderizar la pagina principal');
            res.status(400).json(error.message);
        }
    });

    app.get('/signup', async(req, res) =>{
        try {
            res.render('sign_up')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    })

    app.get('/login', async(req, res) =>{
        try {
            res.render('login')
        } catch (error) {
            console.log('Error al renderizar la página');
            res.status(400).json(error.message);
        }
    })

    
   
}

    // app.get('/categoria', async(req,res) => {
    //     try {
    //         async function getRespuesta(){
    //             const respuesta = await getApi(process.env.CATEGORIAS);
    //             return respuesta;
    //         }
    //         res.status(200).send(await getRespuesta());
    //     } catch (error) {
    //         console.log('Error en el método GET de la app');
    //         res.status(400).json(error.message);
    //     }
    // });

    // app.get('/categoria/:idCategoria', async(req,res)=>{
    //     try {
    //         const idCategoria = req.params.idCategoria;
    //         async function getRespuesta(){
    //             let respuesta = await getApi(process.env.SUBCATEGORIAS+idCategoria);
    //             return respuesta;
    //         }
    //         res.status(200).send(await getRespuesta());
    //     } catch (error) {
    //         console.log('Error en el método GET de la app');
    //         res.status(400).json(error.message);
    //     }
    // });

//     app.get('/subcategoria/:idSubcategoria', async(req,res)=>{
//         try {
//             const idSubcategoria = req.params.idSubcategoria;
//             async function getRespuesta(){
//                 let respuesta = await getApi(process.env.PRODUCTOS+idSubcategoria);
//                 return respuesta.results;
//             }
//             res.status(200).send(await getRespuesta());            
//         } catch (error) {
//             console.log('Error en el método GET de la app');
//             res.status(400).json(error.message);
//         }
//     });
// }