const nuevoRegistro = document.getElementById('Alta')

nuevoRegistro.addEventListener('click', async () =>{

    let Id_Producto = document.getElementById('Id_Producto').value;
    let Nombre_Producto = document.getElementById('Nombre_Producto').value;
    let Precio = document.getElementById('Precio').value;
    let Url_Imagen = document.getElementById('Url_Imagen').value;
    let Descripcion = document.getElementById('Descripcion').value;
    let Stock = document.getElementById('Stock').value;
    let Id_Categoria = document.getElementById('Id_Categoria').value;
    
    producto= {
        id_producto: Id_Producto,
        title: Nombre_Producto,
        price: Precio,
        thumbnail: Url_Imagen,
        descripcion: Descripcion,
        stock: Stock,
        id_categoria: Id_Categoria 
    }
    try {
        validarId(producto.id_producto, 'id_producto')
        validarTxt(producto.Nombre_Producto,'Nombre_Producto')

       
        let alta = await altaproducto(producto)
        if (alta){
            console.log(alta)
            alert(`Alta Exitosa`)
          }

    } catch(error){
        console.log(error)
        alert(`Error: ${error.message}`)

    }

})

const botonCategoria = document.getElementById("listacategorias")  
botonCategoria.addEventListener("click", e => {                     
    if (e.target.classList.contains("categoria")){
        const idcategoria= e.target.dataset.id
        localStorage.setItem('idcategoria', idcategoria)            
    }  
})



const botonListarProductos = document.getElementById("listaproductos")  

botonListarProductos.addEventListener("click", async () => {                      
    try{ 
        const idcategoria =localStorage.getItem('idcategoria'); 
        console.log(idcategoria)    
        let productos = await obtenerproductos(idcategoria)

        // console.log(productos.resultado)  

        //GENERACION DEL DOM DE LA PAGINA
    //     const  mostrarproductos = async ()=>  {
    //         const items = document.getElementById('items');
    //         const templateproductos = document.getElementById('templateproductos').content;
    //         const fragment = document.createDocumentFragment()
    
    //         datosproductos.resultado.forEach(producto => {
    //             templateproductos.querySelector('th').textContent = producto.id_producto
    //             templateproductos.querySelectorAll('td')[0].textContent = producto.nombre_producto
    //             templateproductos.querySelectorAll('td')[1].textContent = producto.precio
    //             // templateproductos.querySelector('img').setAttribute("src", producto.url_imagen)
    //             templateproductos.querySelectorAll('td')[2].textContent = producto.descripcion
    //             templateproductos.querySelectorAll('td')[3].textContent = producto.stock
    //             templateproductos.querySelectorAll('td')[4].textContent = producto.id_categoria
    //             templateproductos.querySelectorAll('td')[5].textContent = producto.Fecha_Actualizacion
    //             templateproductos.querySelectorAll('td')[6].textContent = producto.Fecha_Registro
    //             const clone = templateproductos.cloneNode(true)
    //             fragment.appendChild(clone)       
    //         })
    //         items.appendChild(fragment)
    //     }
    // const mostrar = await mostrarproductos()
    
     }catch(error){
        console.log(error)
        alert(`Error: ${error.message}`)
    }

    
})



