let botonLogin = document.getElementById("login")

botonLogin.addEventListener('click', async ()=> {
   
    let correo = document.getElementById("inputEmail").value
    let contrasena = document.getElementById("inputPassword").value
 
    
    try {
        let usuario = {
            correo:  correo,
            contrasena: contrasena
        }
        console.log("boton detectado")
        console.log(usuario)
        let resultado = await fetch('http://localhost:3000/usuario/login', {
            method: 'post',
            headers: {
                "Accept": "application/json, text/plain, */*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        let token = await resultado.json()
        console.log(token.validacion)
        localStorage.setItem('token', JSON.stringify(token.validacion))
    } catch (error) {
        console.log(error)

    }

})   

//     let datosVuelta = await resultado.json()
//     data.token = datosVuelta
//     console.log(data)
//     Usuario.guardaUsuario(data)
// })

// botonUsuarios.addEventListener('click', async ()=> {
//     let data = await Usuario.recuperaUsuario()

//     let resultado = await fetch("http://localhost:3000/usuarios", {
//         method: 'get',
//         headers: {
//             "Accept": "application/json, text/plain, */*",
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${data.token}`
//         },
//     })

//     let datosVuelta = await resultado.json()
//     console.log(datosVuelta)

// })