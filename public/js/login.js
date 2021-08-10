// Variables globales
let btnLogin = document.getElementById("login");

// Función para capturar los datos del usuario
btnLogin.addEventListener('submit', async(e) =>{
    let usuario = {
        correo: document.getElementById("inputEmail").value,
        contrasena: document. getElementById("inputPassword").value
    }
    try {
        e.preventDefault()
        validarEmail(usuario.correo);
        validarContrasena(usuario.contrasena);
        let iniciarSesion = await nuevoIngreso(usuario);
        usuario.token = iniciarSesion.validacion;
        localStorage.setItem('token', JSON.stringify(usuario.token))
        window.location.href = "http://localhost:3000/home"
    } catch (error) {
        console.log(error);
        alert(`Error: ${error.message}`);
    }
})