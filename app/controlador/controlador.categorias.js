
const modeloCategorias = require('../modelo/modelo.categorias');

module.exports.listarCategorias = async ()=> {
    try {
        const resultado = await modeloCategorias.obtenerCategorias();
        return resultado;
    }catch (error) {
        console.log('Error desde el controlador de categorias');
        console.log(error);
        throw new Error ('Desde el controlador paso algo');
    }
}