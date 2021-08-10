//Este codigo es creado para generar la logica de la pagina de Administrador de los Productos Locales

const nuevoRegistro = document.getElementById('Alta')

nuevoRegistro.addEventListener('click', async () =>{                        //Boton que detectara el evento del Boton Alta al crear un nuevo Producto Local
    //Se guardan los valores ingresados en variables
    let Id_Producto = document.getElementById('Id_Producto').value;         
    let Nombre_Producto = document.getElementById('Nombre_Producto').value;
    let Precio = document.getElementById('Precio').value;
    let Url_Imagen = document.getElementById('Url_Imagen').value;
    let Descripcion = document.getElementById('Descripcion').value;
    let Stock = document.getElementById('Stock').value;
    let Id_Categoria = document.getElementById('Id_Categoria').value;
    
    //Se crea un objeto Producto con los valores introducidos
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
        validarId(producto.id_producto, 'id_producto')          //Se valida que el Id introducido del producto sea alfanumerico, la funcion se encuentra en el archi "newproductvalidation"   
        let alta = await altaproducto(producto)                 //Se invoca la funcion "altaproducto" del archivo "newproductcall" para realizar la creacion del producto en la base de datos mediante el metodo correspondiente en el archivo "vista.productos"
        if (alta){                                              //Si la variable alta devuelve un contenido, se imprimira en pantalla alta exitosa
            console.log(alta)
            alert(`Alta Exitosa`)
          }

    } catch(error){                                             //En caso fallido se captura el error
        console.log(error)
        alert(`Error: ${error.message}`)

    }

})

const actualizar = document.getElementById('Actualizar')

actualizar.addEventListener('click', async () =>{               //Boton que detectara el evento del Boton Actualizar al crear un nuevo Producto Local
    
    //Se guardan los valores ingresados en variables
    let Id_Producto = document.getElementById('Id_Producto').value;
    let Nombre_Producto = document.getElementById('Nombre_Producto').value;
    let Precio = document.getElementById('Precio').value;
    let Url_Imagen = document.getElementById('Url_Imagen').value;
    let Descripcion = document.getElementById('Descripcion').value;
    let Stock = document.getElementById('Stock').value;
    let Id_Categoria = document.getElementById('Id_Categoria').value;

    //Se crea un objeto Producto con los valores introducidos
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
        validarId(producto.id_producto, 'id_producto')          //Se valida que el Id introducido del producto sea alfanumerico, la funcion se encuentra en el archi "newproductvalidation"    

        let actualizar = await actualizarProducto(producto)     //Se invoca la funcion "actualizarProducto" del archivo "newproductcall" para realizar la actualizacion de datos del producto en la base de datos mediante el metodo correspondiente en el archivo "vista.productos" 
        if (actualizar){                                        //Si la variable alta devuelve un contenido, se imprimira en pantalla alta exitosa
            console.log(actualizar)
            alert(`Actualizacion Exitosa`)
          }

    } catch(error){                                             //En caso fallido se captura el error
        console.log(error)
        alert(`Error: ${error.message}`)

    }

})




const botonCategoria = document.getElementById("listacategorias")  
botonCategoria.addEventListener("click", e => {                          //Boton que detectara la categoria seleccionada por el Administrador para visualizar todos los productos locales registrados en la base de datos
    if (e.target.classList.contains("categoria")){
        const idcategoria= e.target.dataset.id
        localStorage.setItem('idcategoria', idcategoria)                 //Se guarda en el LocalStorage el id de la categoria que selecciono el usuario
    }  
})



const botonListarProductos = document.getElementById("listaproductos")     

botonListarProductos.addEventListener("click", async () => {              //Boton que detecta el evento para mostrar los productos locales de la categoria que selecciono el usuario administrador        
    try{ 
        const idcategoria =localStorage.getItem('idcategoria'); 
        console.log(idcategoria)    
        let productos = await obtenerproductos(idcategoria)

        console.log(productos.resultado)  

        // Generacion del DOM de la pagina mostrando los productos locales de la categoria seleccionada
        const  mostrarproductos = async ()=>  {
            const items = document.getElementById('items');
            const templateproductos = document.getElementById('templateproductos').content;
            const fragment = document.createDocumentFragment()
    
            productos.resultado.forEach(producto => {
                templateproductos.querySelector('th').textContent = producto.id_producto
                templateproductos.querySelectorAll('td')[0].textContent = producto.nombre_producto
                templateproductos.querySelectorAll('td')[1].textContent = producto.precio
                templateproductos.querySelectorAll('td')[2].textContent = producto.descripcion
                templateproductos.querySelectorAll('td')[3].textContent = producto.stock
                templateproductos.querySelectorAll('td')[4].textContent = producto.id_categoria
                templateproductos.querySelectorAll('td')[5].textContent = producto.Fecha_Actualizacion
                templateproductos.querySelectorAll('td')[6].textContent = producto.Fecha_Registro
                const clone = templateproductos.cloneNode(true)
                fragment.appendChild(clone)       
            })
            items.appendChild(fragment)
        }
    const mostrar = await mostrarproductos()
    
     }catch(error){                                                             //En caso fallido se captura el error
        console.log(error)
        alert(`Error: ${error.message}`)
    }

    
})


const botonbajaPermanente = document.getElementById("Baja")   

botonbajaPermanente.addEventListener("click", async () => {                     //Boton que detecta el evento de eliminar un producto por id ingresado por el usuario administrador
    try{
    
    let Id_Producto = document.getElementById('BajaProducto').value;
    let baja = await bajaproducto(Id_Producto)                                  //Se invoca la funcion "bajaproducto" del archivo "newproductcall" para realizar la eliminacion de un producto de la base de datos mediante el metodo correspondiente en el archivo "vista.productos"  
    if (baja){                                         
        console.log(baja)
        alert(`Baja permanente Exitosa de la Base de Datos`)
      }

    }catch(error){                                                              //En caso fallido se captura el error
        console.log(error)
        alert(`Error: ${error.message}`)

    }


})
    





