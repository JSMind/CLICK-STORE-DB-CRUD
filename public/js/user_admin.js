const btnListarUsuarios = document.getElementById('listarUsr');
const registros = document.getElementById('registros');
const templateUsuarios = document.getElementById('template-listarUsr').content;
const fragment = document.createDocumentFragment();

btnListarUsuarios.addEventListener('click', async() =>{
    let usuarios = await fetch('http://localhost:3000/usuarios',{
        method: 'get',
        headers: {
            "Accept": "application/json, text/plain, *,*",
            "Content-Type": "application/json"
        }
    })
    // console.log(usuarios)
    let listaUsuarios = await usuarios.json();
    console.log(listaUsuarios.consultaUsuarios)
    listaUsuarios.consultaUsuarios.forEach(usuario => {
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