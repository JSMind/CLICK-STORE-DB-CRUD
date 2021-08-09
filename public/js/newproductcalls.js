
let altaproducto = async(Producto) =>{

    try {
    let result = await fetch('http://localhost:3000/productos/create',{    
            method:'post',
            headers: {
                "Accept": "application/json, text/plain, *,*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Producto)
        })

        let resultado = await result.json()
        console.log(resultado)
        return resultado;  
    } catch (error){
        console.log(error)
        throw new Error ('Error en la llamada para la alta de producto')
    }
}