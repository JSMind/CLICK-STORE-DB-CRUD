const nuevoRegistro = document.getElementById('formulario')

nuevoRegistro.addEventListener('submit', async (evento) =>{
    let Id_Producto = document.getElementById('Id_Producto').value;
    let Nombre_Producto = document.getElementById('Nombre_Producto').value;
    let Precio = document.getElementById('Precio').value;
    let Url_Imagen = document.getElementById('Url_Imagen').value;
    let Descripcion = document.getElementById('Descripcion').value;
    let Stock = document.getElementById('Stock').value;
   
    
    // console.log(nombre,apellidos,contrasena)
    let result = await fetch('http://localhost:3000/productostendencia/create',{
        method:'post',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": Id_Producto,
            "title" : Nombre_Producto,
            "price": Precio,
            "thumbnail": Url_Imagen,
            "descripcion": Descripcion,
            "stock": Stock
        })
    })

    // let resultado = await result.json()
    // console.log(resultado)
})