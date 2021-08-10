
class Producto{                                             //Definimos nuestra clase Producto

    
    constructor(formatobjeto){                              //Definimos el constructor
        this.data=formatobjeto
       
    }
      

    mostrarProductos() {                                    //Metodo que imprimira el DOM de la pagina Product
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
    
    productoseleccionado(numeroelemento){                   //Metodo que trae del constructor el producto seleccionado por el usuario
                                                            
        let producto = this.data.resultado[numeroelemento]
        
        if(carrito.length==0){                              //Si el carrito esta vacio, se agrega el atributo "cantidad=1" al objeto "producto"                   
            producto.cantidad=1
            carrito.push(producto)                          //Se agrega el producto al carrito
        } else {
            let existe = 0;                                 //Si el carrito no esta vacio, se recorre el carrito para verificar si el nuevo producto seleccionado por el usuario se encuentra en el carrito, y alterar su atributo cantidad en +1
            carrito.forEach(elemento => {
                if (producto.id_producto === elemento.id_producto){
                    elemento.cantidad += 1;
                    existe = 1;                             //Si existe el producto en el carrito, la variable existe toma el valor de 1
                }  
            })

            if(existe == 0){                                //Si no existe el producto en el carrito, se agrega el producto nuevo al carrito, ademas se agrega el atributo "cantidad=1" en el objeto "producto"
                producto.cantidad=1
                carrito.push(producto)
            }   
           
        }
                 
    }
}


async function obtenerProductos(url){                        //Metodo que consumira del servidor los productos relacionados a la categoria seleccionada por el usuario
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
        
    
    const botonAgregarProducto = document.querySelector(".container") 
    botonAgregarProducto.addEventListener("click", e => {       //Evento que detecta EL PRODUCTO SELECCIONADO POR el usuario
        
        if (e.target.classList.contains("btn-producto")){

            let numeroelemento = e.target.dataset.id
            Data.productoseleccionado(numeroelemento)           //Se invoca el metodo "productoseleccionado" del objeto Data definido en la clase Producto
            localStorage.setItem('carrito', JSON.stringify(carrito))   //Guardamos en localstorage el arreglo carrito
        }  
    })


}  


let carrito = []                                                   //Areglo que contendra los objetos Produtos


if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
}
const idcategoria =localStorage.getItem('idcategoria');            //Recuperamos la variable "idcategoria" del localstorage

obtenerProductos("http://localhost:3000/productos/categoria"+idcategoria)  //Aqui se inicializa el codigo



