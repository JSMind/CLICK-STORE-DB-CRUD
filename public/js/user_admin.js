//En este archivo se contiene la logica para la pagina de Administrador para usuarios

//Se declara las variables globales
const btnListarUsuarios = document.getElementById('listarUsr');
const registros = document.getElementById('registros');
const templateUsuarios = document.getElementById('template-listarUsr').content;
const fragment = document.createDocumentFragment();

btnListarUsuarios.addEventListener('click', async() =>{                             //Boton que detectara el evento para listar los usuarios
    let usuarios = await fetch('http://localhost:3000/usuarios',{                   //Se invoca el metodo de la vista correspondiente del servidor para listar todos los usuarios registrados en la base de datos
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        }
    })
    let listaUsuarios = await usuarios.json();
    console.log(listaUsuarios.consultaUsuarios)

    listaUsuarios.consultaUsuarios.forEach(usuario => {                             //Se genera el DOM de la pagina mostrando los usuarios registrados en la base de datos
        templateUsuarios.querySelector('th').textContent = usuario.id_usuario
        templateUsuarios.querySelectorAll('td')[0].textContent = usuario.nombres
        templateUsuarios.querySelectorAll('td')[1].textContent = usuario.apellidos
        templateUsuarios.querySelectorAll('td')[2].textContent = usuario.correo
        templateUsuarios.querySelectorAll('td')[3].textContent = usuario.telefono
        templateUsuarios.querySelectorAll('td')[4].textContent = usuario.fecha_nacimiento
        if (usuario.activo){
            templateUsuarios.querySelectorAll('td')[5].textContent = 'Activo'
        } else {
            templateUsuarios.querySelectorAll('td')[5].textContent = 'Desactivado'
        }
        templateUsuarios.querySelectorAll('td')[6].textContent = usuario.tipo_usuario
        templateUsuarios.querySelectorAll('td')[7].textContent = usuario.fecha_registro
        templateUsuarios.querySelectorAll('td')[8].textContent = usuario.fecha_registro
        const clone = templateUsuarios.cloneNode(true)
        fragment.appendChild(clone)
    });
    registros.appendChild(fragment)
})