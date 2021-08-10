//Este archivo contiene las llamadas mediante el metodo fetch a las vistas creadas del servidor que se encuentra en la carpeta "Vistas"

let altaproducto = async(producto) =>{                                  //Metodo que hace la llamada al servidor para crear un producto nuevo en la base de datos

    try {
    let result = await fetch('http://localhost:3000/productos/create',{    
            method:'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })

        let resultado = await result.json()
        console.log(resultado)
        return resultado;  
    } catch (error){
        console.log(error)
        throw new Error ('Error en la llamada para la alta de producto')
    }
}
let actualizarProducto = async(producto) =>{                            //Metodo que hace la llamada al servidor para actualizar un producto en la base de datos

    try {
    let result = await fetch('http://localhost:3000/productos/update',{    
            method:'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })

        let resultado = await result.json()
        console.log(resultado)
        return resultado;  
    } catch (error){
        console.log(error)
        throw new Error ('Error en la llamada para la actualizacion del producto')
    }
}

let obtenerproductos = async (idcategoria) =>{                             //Metodo que hace la llamada al servidor para obtener todos los productos locales registrados en la base de datos
    try{
        let respuesta = await fetch("http://localhost:3000/productos/categoria"+idcategoria)
            productos = respuesta.json()
        return productos
    }catch(error){
        console.log(error)
        throw new Error ('Error en la llamada para mostrar los productos')
    }
}

let bajaproducto = async (Id_Producto) =>{                                  //Metodo que hace la llamada al servidor para eliminar un producto local de forma permanente en la base de datos
    try{
        let respuesta = await fetch('http://localhost:3000/productos/delete/'+Id_Producto,{    
            method:'delete'})    
            confirmacion = respuesta
        return confirmacion
    }catch(error){
        console.log(error)
        throw new Error ('Error en la llamada para eliminar el producto de la base de datos')
    }
}