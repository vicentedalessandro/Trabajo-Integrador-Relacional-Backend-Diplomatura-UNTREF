# Proyecto Integrador: CRUD con Node.js y MySQL

## Descripción
En este proyecto se realizo una aplicación de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para una plataforma de streaming sobre una base de datos relacionar. Se utilizó como referencia el archivo __trailerflix.json__ alojado en __/public__.

## Tecnologías
- Node.js
- Base de datos relacional: MySQL
- Otros: Express, Morgan, mysql2 y Sequelize

También se implemento Standard para manejar un formato de código.

## Estructura del repositorio
MVC - Model, View, Controller.
```
/public -> archivos servidos públicamente
/src
  /api -> documentación de la API: swagger y .rest
  /config -> configuraciones básicas
  /controllers -> controlador de las funciones divida por feature
  /db -> conexión a la base de datos
  /middleware -> ej: notfound.middleware.js
  /models -> replicas de las tablas/entidades de la base de datos
  /routes -> rutas de los endpoints divida por features
  /service -> servicios
  /utils -> funciones que se utilizaran en proyecto
  app.js -> entrada del servidor
```

## Dependencias necesarias para el funcionamiento del proyecto
```
"dependencies": {
  "express": "^4.21.1",
  "morgan": "^1.10.0",
  "mysql2": "^3.11.3",
  "sequelize": "^6.37.4",
  "swagger-jsdoc": "^6.2.8",
  "swagger-ui-express": "^5.0.1"
}
```

## Dependencias de desarrollo
```
"devDependencies": {
  "standard": "^17.1.2"
}
```

## Instalación de dependencias
Realiza el siguiente comando en la consola estando en la carpeta raíz del proyecto para instalar las dependencias:
```
npm install
```
o ejecuta las siguientes de comandos:
```
npm init
npm install express morgan mysql2 sequelize swagger-jsdoc swagger-ui-express
npm install --save-dev standard
```

## Variables de entorno
Deberás crear un archivo __.env__ y agregar las siguientes variables de entorno para llevar a cabo el funcionamiento correcto del proyecto:
```
PORT = puerto
MYSQL_HOST = host
MYSQL_USER = usuario
MYSQL_PASSWORD = pass
MYSQL_DATABASE = nombre de la base de datos
```

## Modelo de datos
La base de datos se llama __trailerflix__, pero si se desea, se puede cambiar.

Esta base de datos va a contar con las siguientes tablas

### category
Esta tabla contiene las categorías y maneja los siguientes campos:

| **Campo**               | **Tipo**        | **Descripción**                         |
|-------------------------|-----------------|-----------------------------------------|
| id_category (PK)        | int             | Identificador único de la categoría     |
| category_name           | varchar(255)    | Nombre de la categoría                  |

---

### genre
Esta tabla contiene los géneros de las películas/series y maneja los siguientes campos:

| **Campo**               | **Tipo**        | **Descripción**                         |
|-------------------------|-----------------|-----------------------------------------|
| id_genre (PK)           | int             | Identificador único del género          |
| genre_name              | varchar(255)    | Nombre del género                       |

---

### actors
Esta tabla contiene a los actores de las películas/series y maneja los siguientes campos:

| **Campo**               | **Tipo**        | **Descripción**                         |
|-------------------------|-----------------|-----------------------------------------|
| id_actor (PK)           | int             | Identificador único del actor           |
| actor_name              | varchar(255)    | Nombre del actor                        |

---

### cinema
Esta tabla contiene las películas/series y maneja los siguientes campos:

| **Campo**               | **Tipo**        | **Descripción**                                                 |
|-------------------------|-----------------|-----------------------------------------------------------------|
| id_cinema (PK)          | int             | Identificador único de la película/serie                        |
| poster                  | varchar(255)    | Ruta al póster de la película/serie                             |
| title                   | varchar(255)    | Título de la película/serie                                     |
| seasons                 | varchar(255)    | Número de temporadas (nullable)                                 |
| duration                | varchar(255)    | Duración de la película/serie (nullable)                        |
| trailer                 | varchar(255)    | Ruta al tráiler de la película/serie                            |
| id_category (FK)        | int             | Llave foránea que hace referencia a la tabla "category"         |

---

### cinema_actors
Esta es una tabla intermedia que sirve como relación n:m para las tablas cinema y actors, y maneja los siguientes campos:

| **Campo**               | **Tipo**        | **Descripción**                           |
|-------------------------|-----------------|-------------------------------------------|
| id_cinema (PK)          | int             | Llave primaria que referencia a "cinema"  |
| id_actor (PK)           | int             | Llave primaria que referencia a "actors"  |

---

### cinema_genres
Esta es una tabla intermedia que sirve como relación n:m para las tablas cinema y genres, y maneja los siguientes campos:

| **Campo**               | **Tipo**        | **Descripción**                           |
|-------------------------|-----------------|-------------------------------------------|
| id_cinema (PK)          | int             | Llave primaria que referencia a "cinema"  |
| id_genre (PK)           | int             | Llave primaria que referencia a "genre"   |

## Iniciar el servidor
Para iniciar el servidor tienes varias opciones por consola:
```
1. node ./src/app.js
2. npm start // este comando realiza lo mismo que el primero, solo que evitas buscar el archivo en el proyecto
3. npm run dev // este comando inicializa el servidor con la característica --watch
```

Una vez este "corriendo" el servidor, saldrá por consola el siguiente mensaje:
```
Server running on port http://localhost:3000/
```
Por defecto, el servidor se inicia en el puerto __3000__, pero puedes modificarlo mediante la variable de entorno __PORT__ que te nombramos al principio de la documentación.

## Realizar una petición
Una vez realices una solicitud al servidor, el siguiente __middleware__
```
app.use(sequelizeMiddleware)
```
se encargara de crear las tablas en tu base de datos en caso de que no existan.

Por otro lado, tendrás disponible los __endpoints__ en la url http://localhost:3000/api-docs gracias a la librería swagger o en __./src/api/rest__ con los respectivos archivos __.rest__ divididos por feature.
