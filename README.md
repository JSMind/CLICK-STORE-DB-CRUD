# Tienda en Linea Click-Store

En este proyecto se realiza la creacion de una tienda en linea, donde el usuario podra registrarse y tener una cuenta segura, para poder realizar sus compras de los productos que seleccione, que se guardaran en un carrito de compras. Posteriormente podra pagar cuando lo desee. Tambien existe un apartado para el administrador donde podra dar de alta, eliminar y actualizar los productos por categoria que asi decida.

Para poder acceder al proyecto, es necesario seguir los siguientes pasos :
1. Clonar el repositorio con la instrucción:

      git clone https://github.com/JSMind/Tienda-en-Linea-Click-Store.git
      
2. Una vez clonado el repositorio en la ruta deseada, es necesario instalar los modulos de nuestro servidor al ejecutar las siguiente líneas de comando desde la terminal:
            
            npm install
            
            
3. Debe crearse el archivo .ENV con las variables de entorno para realizar la conexion con la base de datos.

4. Después de instalar los modulos, es preciso inicializar el servidor al ejecutar la siguiente línea de comando:
            
            npm run dev
      
5. Para visualizar la pagína web, se puede acceder a la url http://localhost:3000/login donde en la seccion signup el usuario podra registrarse para posteriormente iniciar sesion y dirigirse a la pagina /home.

6. El usuario podra seleccionar los productos que desea de las categorias mostradas, y podra consultar su carrito de compras en el boton "Shopping Cart" para posteriormente realizar su compra en el boton "Pagar".
