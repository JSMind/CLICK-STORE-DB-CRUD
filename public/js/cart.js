    
//Declaracion de variables globales 

const productos = document.getElementById('items');
const templateCarrito = document.getElementById('template-carrito').content;
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('template-footer').content;
const fragment = document.createDocumentFragment()

productos.addEventListener('click', e => { btnAumentarDisminuir(e) })           //Boton que detecta el evento que desee el usuario "Aumentar" o "Disminuir" la cantidad del producto selecccionado

const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('btn-agregar')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad+=1
        carrito[e.target.dataset.id] = producto
        mostrarCarrito(carrito)
    }

    if (e.target.classList.contains('btn-quitar')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad-=1
        if (producto.cantidad === 0) {
            carrito.splice(e.target.dataset.id, 1) 
        } else {
            carrito[e.target.dataset.id] =  producto
        }
        mostrarCarrito(carrito)
    }
    e.stopPropagation()
}

//Funcion que mostrara el carrito en pantalla
let mostrarCarrito = (carrito) => {
    productos.innerHTML = ''
    i=0;
    carrito.forEach(producto => {                                               //Generacion del DOM a traves de los Productos que contiene el arreglo Carrito
        templateCarrito.querySelector('th').textContent = producto.id_producto
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre_producto
        templateCarrito.querySelector('img').setAttribute("src", producto.url_imagen)
        templateCarrito.querySelectorAll('td')[2].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad

        templateCarrito.querySelector('.btn-agregar').dataset.id = i
        templateCarrito.querySelector('.btn-quitar').dataset.id = i

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
        i++
    })
    productos.appendChild(fragment)
    mostrarTotales()
    
    //Se guarda el arreglo carrito en el LocalStorage 
    localStorage.setItem('carrito', JSON.stringify(carrito))                   
}

//Funcion que calcula los Totales de los Productos seleccionados por el usuario
let mostrarTotales = () => {                                                    
    
    footer.innerHTML=''
    if(carrito.length === 0){                       //Si la longitud del carrito es igual a cero, se mostrara en pantalla "Carrito Vacio"
        footer.innerHTML =  `
        <th scope="row" colspan="5">CARRITO VACÍO <i class="bi bi-emoji-frown"></i></th>
        `
        return;
    }

    // Calcular la cantidad total de articulos y su costo total
    let cantidadTotalArtic = 0
    let costoTotal = 0
    carrito.forEach( producto => {                              //Se recorre el arreglo carrito para acceder a la cantidad y precio seleccionado por el usuario y calcular el costo Total.
        cantidadTotalArtic += producto.cantidad
        costoTotal += (producto.cantidad * producto.precio)
    })

    templateFooter.querySelectorAll('td')[0].textContent = cantidadTotalArtic //Se genera el DOM mostrando en pantalla el Total de los Productos seleccionados
    templateFooter.querySelector('span').textContent = costoTotal

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const boton = document.getElementById('vaciar-carrito')     
    boton.addEventListener('click', () => {                     //Si el usuario selecciona el boton vaciar carrito se volver a mostrar el carrito, con 0 Productos
        carrito = []
        console.log(carrito)
        mostrarCarrito(carrito)
    })


}

//Aqui comienza el codigo

let carrito = JSON.parse(localStorage.getItem('carrito')) //Recuperamos el valor del arreglo "Carrito"

mostrarCarrito(carrito)            //Metodo que mostrara el carrito en la Pagina Cart (Chekout)
