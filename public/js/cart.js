    
const productos = document.getElementById('items');
const templateCarrito = document.getElementById('template-carrito').content;
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('template-footer').content;
const fragment = document.createDocumentFragment()

productos.addEventListener('click', e => { btnAumentarDisminuir(e) })

const btnAumentarDisminuir = e => {
    // console.log(e.target.classList.contains('btn-info'))
    if (e.target.classList.contains('btn-agregar')) {
        const producto = carrito[e.target.dataset.id]
        // console.log(producto)
        producto.cantidad+=1
        carrito[e.target.dataset.id] = producto
        mostrarCarrito(carrito)
    }

    if (e.target.classList.contains('btn-quitar')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad-=1
        if (producto.cantidad === 0) {
            // delete carrito[e.target.dataset.id]
            carrito.splice(e.target.dataset.id, 1) 
        } else {
            carrito[e.target.dataset.id] =  producto
        }
        mostrarCarrito(carrito)
    }
    e.stopPropagation()
}

let mostrarCarrito = (carrito) => {
    productos.innerHTML = ''
    i=0;
    carrito.forEach(producto => {
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
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

let mostrarTotales = () => {
    footer.innerHTML=''
    if(carrito.length === 0){
        footer.innerHTML =  `
        <th scope="row" colspan="5">CARRITO VACÍO <i class="bi bi-emoji-frown"></i></th>
        `
        return;
    }

    // Calcular la cantidad total de articulos y su costo total
    let cantidadTotalArtic = 0
    let costoTotal = 0
    carrito.forEach( producto => {
        cantidadTotalArtic += producto.cantidad
        costoTotal += (producto.cantidad * producto.precio)
    })

    templateFooter.querySelectorAll('td')[0].textContent = cantidadTotalArtic
    templateFooter.querySelector('span').textContent = costoTotal

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const boton = document.getElementById('vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = []
        console.log(carrito)
        mostrarCarrito(carrito)
    })


}


let carrito = JSON.parse(localStorage.getItem('carrito')) //Recuperamos el valor del arreglo "Carrito"

mostrarCarrito(carrito)            //Aqui se inicia el codigo
