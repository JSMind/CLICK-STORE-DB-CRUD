
let altaproducto = async(producto) =>{

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
let actualizarProducto = async(producto) =>{

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

let obtenerproductos = async (idcategoria) =>{ 
    try{
        let respuesta = await fetch("http://localhost:3000/productos/categoria"+idcategoria)
            productos = respuesta.json()
        return productos
    }catch(error){
        console.log(error)
        throw new Error ('Error en la llamada para mostrar los productos')
    }
}