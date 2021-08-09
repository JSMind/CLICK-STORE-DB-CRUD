
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

let obtenerproductos = async (idcategoria) =>{ 
    try{
        console.log("entro a la llamada")
        console.log(idcategoria)
        let respuesta = await fetch("http://localhost:3000/admin/productos/categoria"+idcategoria)
        
        //     productos = respuesta.json()
        // return productos
    }catch(error){
        console.log(error)
        throw new Error ('Error en la llamada para mostrar los productos')
    }
}