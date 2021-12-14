# Api-Rest-Clima
Implementación de un servicio de API REST, que recopila la información de diversas fuentes de información, ya sea mediante fuentes estáticas como web scraping.

## Clonar repositorio
En primera instancia, se debe clonar el respositorio mediante el uso de GIT. Debe ingresar el siguiente comando por terminarl:

-```git clone https://github.com/Axel-Brito/Api-Rest-Clima.git```

Una vez clonado el repositorio debe ingresar a la carpeta creada con el comando:

-```cd ./Api-Rest-Clima```

Ahora debemos instalar los paquetes necesarios para correr el servidor, son dependencias que son añadidas automáticamente en el archivo "package.json".

-``` npm install```

Al finalizar la instalación, podemos correr el servidor con:

-```npm run dev```

## Pruebas con POSTMAN
Para realizar pruebas del servicio de API REST, podemos emplear el software de Postman (también existen alternativas como Insomnia) para realizar peticiones http sin la necesidad de tener construido un frontend.

-```sudo snap install postman```

## Crear Usuario
Una vez se instala Postman, podemos realizar las siguientes pruebas.
Si desea, puede saltarse el inicio de sesión y crear un "request"

Ahí elige el método POST con la URL:
-```"http://localhost:puerto/grupo-g/usuario/create"```
Mandando los datos por medio del body y el formato raw. Se pueden enviar los datos de: nombre, correo, password.

## Login
Debemos ingresar una petición POST a la URL: 
-```"http://localhost:puerto/grupo-g/auth/login"```

## Consultar datos
Para consumir la API REST como tal, sea con la función que requiera. Debe realizar una petición GET a la URL:
-```"http://localhost:puerto/grupo-g/climaroutes```

## PostgreSQL

Para el correcto funcionamiento de la API REST, se debe tener PostgreSQL instalado en nuestro ordenador, además de crear la base de datos correspondiente al proyecto. Se recomienda ver el archivo de conexión entre bd y el servidor: 
```Api-Rest-Clima/src/controllers/conexion_db.js```
En dicho archivo, se puede ver
    Host
    User: Se utiliza el usuario postgres predeterminado
    Password: Contraseña del usuario postgre
    Database: apiclima
    port: 4321
