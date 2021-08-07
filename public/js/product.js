
class Producto{                                     //Definimos nuestra clase Producto

    
    constructor(formatobjeto){                      //Definimos el constructor
        this.data=formatobjeto
       
    }
      

    mostrarProductos() {                            //Metodo que imprimira el DOM de producto.html 
        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()
        
        let i = 0;
        this.data.resultado.forEach(item => {  
            templateCard.querySelector('h5').textContent = item.nombre_producto
            templateCard.querySelector('p').textContent = "PRECIO : $"+ item.precio
            templateCard.querySelector('img').setAttribute("src", item.url_imagen)
            templateCard.querySelector('button').dataset.id = i
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
            i++;
        })
        items.appendChild(fragment)
    }
    
    productoseleccionado(numeroelemento){  

        const  producto = this.data.resultado[numeroelemento]
        if(producto.hasOwnProperty(producto.cantidad)){
            producto.cantidad+=1
            carrito[numeroelemento].push(producto)
        } else {
           producto.cantidad = 1
           carrito.push(producto)
        }
        this.data.resultado[numeroelemento] = producto;
          
    }
}


async function obtenerProductos(url){                   //Metodo que consumira de nuestra API propia los productos relacionados a la subcategoria que selecciono el usuario
    let Data
    await fetch(url)                                   
            .then(response => response.json())       
            .then(formatobjeto => {
                Data = new Producto(formatobjeto)   
                // console.log(Data)
                Data.mostrarProductos()               
            })
            .catch(error =>{
                console.log(error)                   
            })
        
    
    const botonProducto = document.querySelector(".container") 
    botonProducto.addEventListener("click", e => {                     //Evento que detecta EL PRODUCTO SELECCIONADO POR el usuario
        
        if (e.target.classList.contains("btn-producto")){

            let numeroelemento = e.target.dataset.id
            Data.productoseleccionado(numeroelemento)
            
            // carrito.push[numeroelemento] =  {...producto}           
            
            
            
            
            
            // if ( producto.id_producto){
            //     carrito.push(producto)
            // } else {
            //     producto.cantidad += 1;
            // }
            
            
            // if (carrito.hasOwnProperty(producto.id)) {
            //     producto.cantidad = carrito[producto.id].cantidad + 1
            // }

            console.log(carrito)                                       //Se imprime en consola el arreglo carrito con los Productos(objetos) seleccionados
            localStorage.setItem('carrito', JSON.stringify(carrito))   //Guardamos en localstorage el arreglo carrito
        }  
    })


}  








let carrito = []                                                    //Areglo que contendra los objetos Produtos


if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
}
const idcategoria =localStorage.getItem('idcategoria');           //Recuperamos la variable "idsubcategoria" del localstorage

obtenerProductos("http://localhost:3000/productos/categoria"+idcategoria)  //Aqui se inicializa el codigo



