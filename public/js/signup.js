// Dar de alta las variables globales
let btnNuevoRegistro = document.getElementById("sign-in");


// Función para capturar los datos del usuario
btnNuevoRegistro.addEventListener('click', async(e) => {
    let usuario = {
      nombres: document.getElementById('firstName').value,
      apellidos: document.getElementById('lastName').value,
      correo: document.getElementById('email').value,
      telefono: document.getElementById('phone').value,
      fecha_nacimiento: document.getElementById('date').value,
      activo: true,
      contrasena: document.getElementById('txtPassword').value,
      tipo_usuario: 2
    }
    try {
      validarTxt(usuario.nombres,'Nombre(s)');
      validarTxt(usuario.apellidos,'Apellido(s)');
      validarOtros(usuario.fecha_nacimiento,'Fecha de nacimiento')
      validarOtros(usuario.telefono,'Telefono')
      validarEmail(usuario.correo);
      validarContrasena(usuario.contrasena);
      e.preventDefault();
      e.stopPropagation();
      let registro = await registroUsuario(usuario);
      console.log(registro.message)
      if (registro){
        alert(`${registro.message}`)
        location.reload();
      }
    } catch (error) {
      console.log(error);
      alert(`Error: ${error.message}`);
    }
  }
)