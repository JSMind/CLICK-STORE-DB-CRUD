class Tendencia{                          //Definimos nuestra clase Subcategoria
      
    constructor(formatobjeto){            //Definimos el constructor
        this.data = formatobjeto 
      
    }

    mostrarTendencias() {                 //Metodo que imprimira el DOM de subcategorias.html 
        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()

        this.data.resultado.forEach(item => {
           
            templateCard.querySelector('h5').textContent = item.Nombre_Producto
            templateCard.querySelector('img').setAttribute("src", item.Url_Imagen)
            templateCard.querySelector('button').dataset.id = item.Id_Producto
            templateCard.querySelector('p').textContent = "PRECIO : $"+ item.Precio
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
            console.log(item)      
        })
        items.appendChild(fragment)
    }
    
    
    static obtenerTendenciasCalzado(url){     //Metodo que consumira de nuestra API propia las subcategorias
        let Data
        fetch(url)                                   
            .then(response => response.json())       
            .then(response => {
                Data = new Tendencia(response)   
                Data.mostrarTendencias()               
            })
            .catch(error =>{
                console.log(error)                   
            })
    }  
    
}

Tendencia.obtenerTendenciasCalzado( 'http://localhost:3000/productostendencia/listar')  //Aqui se inicializa el codigo

const botonSubcategoria = document.querySelector(".container")                      //Evento que detecta la seleccion de la subcategoria del usuario
botonSubcategoria.addEventListener("click", e => {
    if (e.target.classList.contains("btn-subcategoria")){
        const idsubcategoria= e.target.dataset.id
        localStorage.setItem('idsubcategoria', idsubcategoria)                      //se guarda en el localstorage el valor de "idsubcategoria"
    }  
})





