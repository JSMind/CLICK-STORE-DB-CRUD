const nuevoRegistro = document.getElementById('Alta')

nuevoRegistro.addEventListener('click', async () =>{

    let Id_Producto = document.getElementById('Id_Producto').value;
    let Nombre_Producto = document.getElementById('Nombre_Producto').value;
    let Precio = document.getElementById('Precio').value;
    let Url_Imagen = document.getElementById('Url_Imagen').value;
    let Descripcion = document.getElementById('Descripcion').value;
    let Stock = document.getElementById('Stock').value;
    let Id_Categoria = document.getElementById('Id_Categoria').value;
    
    Producto= {
        id_producto: Id_Producto,
        title: Nombre_Producto,
        price: Precio,
        thumbnail: Url_Imagen,
        descripcion: Descripcion,
        stock: Stock,
        id_categoria: Id_Categoria 
    }
    try {
        validarId(Producto.id_producto, 'id_producto')
        validarTxt(Producto.Nombre_Producto,'Nombre_Producto')

       
        let alta = await altaproducto(Producto)
        if (alta){
            console.log(alta)
            alert(`Alta Exitosa`)
          }

    } catch(error){
        console.log(error)
        alert(`Error: ${error.message}`)

    }

})

