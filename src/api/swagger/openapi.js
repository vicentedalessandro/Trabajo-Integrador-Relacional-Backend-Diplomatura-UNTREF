/**
 * @swagger
 * /unique-details:
 *  get:
 *    tags:
 *      - Trailerflix
 *    summary: Obtener detalles unicos
 *    description: Endpoint para obtener todos los detalles unicos del archivo trailerflix.json servido en el archivo ./public.
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a los detalles unicos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                categories:
 *                  type: array
 *                  items:
 *                    type: string
 *                genres:
 *                  type: array
 *                  items:
 *                    type: string
 *                actors:
 *                  type: array
 *                  items:
 *                    type: string
 *              example:
 *                categories: ["Serie", "Pelicula"]
 *                genres: ["Documental", "Corto"]
 *                actors: ["Pedro Pascal", "Emily Watson"]
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get all unique details."
 */

// ACTORS START
// ACTORS START
// ACTORS START
// ACTORS START
// ACTORS START
// ACTORS START

/**
 * @swagger
 * /actor:
 *  get:
 *    tags:
 *      - Actores
 *    summary: Obtener todos los actores
 *    description: Endpoint para obtener todos los actores registrados en la base de datos.
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a los actores.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  actorID:
 *                    type: integer
 *                  actorName:
 *                    type: string
 *                example:
 *                  actorID: 1
 *                  actorName: Pedro Pascal
 *      404:
 *        description: No se encontraron actores en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get all Actors."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get all Actors."
 */

/**
 * @swagger
 * /actor/{actorID}:
 *  get:
 *    tags:
 *      - Actores
 *    summary: Obtener actor por su PK
 *    description: Endpoint para obtener un actor a traves de su PK.
 *    operationId: "getActorByPK"
 *    parameters:
 *      - in: path
 *        name: actorID
 *        description: actor identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a la PK del actor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                actorID:
 *                  type: integer
 *                actorName:
 *                  type: string
 *              example:
 *                actorID: 1
 *                actorName: Pedro Pascal
 *      404:
 *        description: No se encontro el actor en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get Actor by PK."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get Actor by PK."
 */

/**
 * @swagger
 * /actor:
 *  post:
 *    tags:
 *      - Actores
 *    summary: Registrar un actor
 *    description: Endpoint para registrar un actor en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: actor body
 *        description: actor to create
 *        schema:
 *          type: object
 *          required:
 *            - actorName
 *          properties:
 *            actorName:
 *              type: string
 *          example:
 *            actorName: Pedro Pascal
 *    responses:
 *      201:
 *        description: Devuelve un JSON correspondiente al actor registrado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                actorID:
 *                  type: integer
 *                actorName:
 *                  type: string
 *              example:
 *                actorID: 1
 *                actorName: Pedro Pascal
 *      409:
 *        description: Ya existe un actor con ese nombre en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 409 - Actor already exists with this name -> <actor_name>"
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: create Actor."
 */

/**
 * @swagger
 * /actor/{actorID}:
 *  put:
 *    tags:
 *      - Actores
 *    summary: Modificar un actor
 *    description: Endpoint para modificar un actor en la base de datos.
 *    operationId: "updateActor"
 *    parameters:
 *      - in: path
 *        name: actorID
 *        description: actor identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: actor body
 *        description: actor to update
 *        schema:
 *          type: object
 *          required:
 *            - actorName
 *          properties:
 *            actorName:
 *              type: string
 *          example:
 *            actorName: Pedro Pascal
 *    responses:
 *      200:
 *        description: Actor actualizado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Actor Updated."
 *      404:
 *        description: No se encontro el actor en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: update Actor."
 *      409:
 *        description: Ya existe un actor con ese nombre en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 409 - Actor already exists with this name -> <actor_name>"
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: update Actor."
 */

/**
 * @swagger
 * /actor/{actorID}:
 *  delete:
 *    tags:
 *      - Actores
 *    summary: Eliminar un actor
 *    description: Endpoint para eliminar un actor en la base de datos.
 *    operationId: "deleteActor"
 *    parameters:
 *      - in: path
 *        name: actorID
 *        description: actor identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      204:
 *        description: Actor eliminado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Actor Deleted."
 *      404:
 *        description: No se encontro el actor en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get Actor by PK on delete Actor."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: delete Actor."
 */

// ACTORS END
// ACTORS END
// ACTORS END
// ACTORS END
// ACTORS END
// ACTORS END

// CATEGORIES START
// CATEGORIES START
// CATEGORIES START
// CATEGORIES START
// CATEGORIES START
// CATEGORIES START

/**
 * @swagger
 * /category:
 *  get:
 *    tags:
 *      - Categorias
 *    summary: Obtener todas las categorias
 *    description: Endpoint para obtener todas las categorias registradas en la base de datos.
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a las categorias.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  categoryID:
 *                    type: integer
 *                  categoryName:
 *                    type: string
 *                example:
 *                  categoryID: 1
 *                  categoryName: Serie
 *      404:
 *        description: No se encontraron categorias en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get all Categories."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get all Categories."
 */

/**
 * @swagger
 * /category/{categoryID}:
 *  get:
 *    tags:
 *      - Categorias
 *    summary: Obtener categoria por su PK
 *    description: Endpoint para obtener una categoria a traves de su PK.
 *    operationId: "getCategoryByPK"
 *    parameters:
 *      - in: path
 *        name: categoryID
 *        description: category identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a la PK de la categoria.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                categoryID:
 *                  type: integer
 *                categoryName:
 *                  type: string
 *              example:
 *                categoryID: 1
 *                categoryName: Serie
 *      404:
 *        description: No se encontro la categoria en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get Category by PK."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get Category by PK."
 */

/**
 * @swagger
 * /category:
 *  post:
 *    tags:
 *      - Categorias
 *    summary: Registrar una categoria
 *    description: Endpoint para registrar una categoria en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: category body
 *        description: category to create
 *        schema:
 *          type: object
 *          required:
 *            - categoryName
 *          properties:
 *            categoryName:
 *              type: string
 *          example:
 *            categoryName: Serie
 *    responses:
 *      201:
 *        description: Devuelve un JSON correspondiente a la categoria registrada.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                categoryID:
 *                  type: integer
 *                category_name:
 *                  type: string
 *              example:
 *                categoryIDy: 1
 *                category_name: Serie
 *      409:
 *        description: Ya existe una categoria con ese nombre en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 409 - Category already exists with this name -> <category_name>"
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: create Category."
 */

/**
 * @swagger
 * /category/{categoryID}:
 *  put:
 *    tags:
 *      - Categorias
 *    summary: Modificar una categoria
 *    description: Endpoint para modificar una categoria en la base de datos.
 *    operationId: "updateCategory"
 *    parameters:
 *      - in: path
 *        name: categoryID
 *        description: category identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: category body
 *        description: category to update
 *        schema:
 *          type: object
 *          required:
 *            - categoryName
 *          properties:
 *            categoryName:
 *              type: string
 *          example:
 *            categoryName: Serie
 *    responses:
 *      200:
 *        description: Categoria actualizada.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Category Updated."
 *      404:
 *        description: No se encontro la categoria en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: update Category."
 *      409:
 *        description: Ya existe una Categoria con ese nombre en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 409 - Category already exists with this name -> <category_name>"
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: update Category."
 */

/**
 * @swagger
 * /category/{categoryID}:
 *  delete:
 *    tags:
 *      - Categorias
 *    summary: Eliminar una categoria
 *    description: Endpoint para eliminar una categoria en la base de datos.
 *    operationId: "deleteCategory"
 *    parameters:
 *      - in: path
 *        name: categoryID
 *        description: category identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      204:
 *        description: Categoria eliminada.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Category Deleted."
 *      404:
 *        description: No se encontro la categoria en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get Category by PK on delete Category."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: delete Category."
 */

// CATEGORIES END
// CATEGORIES END
// CATEGORIES END
// CATEGORIES END
// CATEGORIES END
// CATEGORIES END

// GENRES START
// GENRES START
// GENRES START
// GENRES START
// GENRES START
// GENRES START

/**
 * @swagger
 * /genre:
 *  get:
 *    tags:
 *      - Generos
 *    summary: Obtener todos los generos
 *    description: Endpoint para obtener todos los generos registrados en la base de datos.
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a los generos.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  genreID:
 *                    type: integer
 *                  genreName:
 *                    type: string
 *                example:
 *                  genreID: 1
 *                  genreName: Documental
 *      404:
 *        description: No se encontraron generos en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get all Genres."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get all Genres."
 */

/**
 * @swagger
 * /genre/{genreID}:
 *  get:
 *    tags:
 *      - Generos
 *    summary: Obtener genero por su PK
 *    description: Endpoint para obtener un genero a traves de su PK.
 *    operationId: "getGenreByPK"
 *    parameters:
 *      - in: path
 *        name: genreID
 *        description: genre identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a la PK del genero.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                genreID:
 *                  type: integer
 *                genreName:
 *                  type: string
 *              example:
 *                genreID: 1
 *                genreName: Documental
 *      404:
 *        description: No se encontro el genero en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get Genre by PK."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get Genre by PK."
 */

/**
 * @swagger
 * /genre:
 *  post:
 *    tags:
 *      - Generos
 *    summary: Registrar un genero
 *    description: Endpoint para registrar un genero en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: genre body
 *        description: genre to create
 *        schema:
 *          type: object
 *          required:
 *            - genreName
 *          properties:
 *            genreName:
 *              type: string
 *          example:
 *            genreName: Documental
 *    responses:
 *      201:
 *        description: Devuelve un JSON correspondiente al genero registrado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                genreID:
 *                  type: integer
 *                genreName:
 *                  type: string
 *              example:
 *                genreID: 1
 *                genreName: Documental
 *      409:
 *        description: Ya existe un genero con ese nombre en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 409 - Genre already exists with this name -> <genre_name>"
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: create Genre."
 */

/**
 * @swagger
 * /genre/{genreID}:
 *  put:
 *    tags:
 *      - Generos
 *    summary: Modificar un genero
 *    description: Endpoint para modificar un genero en la base de datos.
 *    operationId: "updateGenre"
 *    parameters:
 *      - in: path
 *        name: genreID
 *        description: genre identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: genre body
 *        description: genre to update
 *        schema:
 *          type: object
 *          required:
 *            - genreName
 *          properties:
 *            genreName:
 *              type: string
 *          example:
 *            genreName: Documental
 *    responses:
 *      200:
 *        description: Genero actualizado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Genre Updated."
 *      404:
 *        description: No se encontro el genero en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: update Genre."
 *      409:
 *        description: Ya existe un genero con ese nombre en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 409 - Genre already exists with this name -> <genre_name>"
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: update Genre."
 */

/**
 * @swagger
 * /genre/{genreID}:
 *  delete:
 *    tags:
 *      - Generos
 *    summary: Eliminar un genero
 *    description: Endpoint para eliminar un genero en la base de datos.
 *    operationId: "deleteGenre"
 *    parameters:
 *      - in: path
 *        name: genreID
 *        description: genre identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      204:
 *        description: Genero eliminado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Genre Deleted."
 *      404:
 *        description: No se encontro el genero en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get Genre by PK on delete Genre."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: delete Genre."
 */

// GENRES END
// GENRES END
// GENRES END
// GENRES END
// GENRES END
// GENRES END

// CINEMA START
// CINEMA START
// CINEMA START
// CINEMA START
// CINEMA START
// CINEMA START

/**
 * @swagger
 * /cinema:
 *  get:
 *    tags:
 *      - Cinematografías
 *    summary: Obtener todas las cinematografías
 *    description: Endpoint para obtener todas las cinematografías registradas en la base de datos.
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a las cinematografías.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  cinemaID:
 *                    type: integer
 *                  poster:
 *                    type: string
 *                  title:
 *                    type: string
 *                  resume:
 *                    type: string
 *                  seasons:
 *                    type: string
 *                  duration:
 *                    type: string
 *                  trailer:
 *                    type: string
 *                  category:
 *                    type: object
 *                    properties:
 *                      categoryID:
 *                        type: integer
 *                      categoryName:
 *                        type: string
 *                  cast:
 *                    type: array
 *                    items:
 *                      type: string
 *                  genres:
 *                    type: array
 *                    items:
 *                      type: string
 *                example:
 *                  cinemaID: 1
 *                  poster: ./posters/3.jpg
 *                  title: The Mandalorian
 *                  resume: Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.
 *                  seasons: "2"
 *                  duration: N/A
 *                  trailer: "https://www.youtube.com/embed/aOC8E8z_ifw"
 *                  category:
 *                    categoryID: 1
 *                    categoryName: Serie
 *                  cast: ["Pedro Pascal", "Carl Weathers", "Misty Rosas", "Chris Bartlett", "Rio Hackford", "Giancarlo Esposito"]
 *                  genres: ["Sci-Fi", "Fantasía", "Acción"]
 *      404:
 *        description: No se encontraron cinematografías en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get all Cinema."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get all Cinema."
 */

/**
 * @swagger
 * /cinema/{cinemaID}:
 *  get:
 *    tags:
 *      - Cinematografías
 *    summary: Obtener cinematografía por su PK
 *    description: Endpoint para obtener una cinematografía a traves de su PK.
 *    operationId: "getCinemaByPK"
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      200:
 *        description: Devuelve un JSON correspondiente a la PK de la cinematografía.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                cinemaID:
 *                  type: integer
 *                poster:
 *                  type: string
 *                title:
 *                  type: string
 *                resume:
 *                  type: string
 *                seasons:
 *                  type: string
 *                duration:
 *                  type: string
 *                trailer:
 *                  type: string
 *                category:
 *                  type: object
 *                  properties:
 *                    categoryID:
 *                      type: integer
 *                    categoryName:
 *                      type: string
 *                cast:
 *                  type: array
 *                  items:
 *                    type: string
 *                genres:
 *                  type: array
 *                  items:
 *                    type: string
 *              example:
 *                cinemaID: 1
 *                poster: ./posters/3.jpg
 *                title: The Mandalorian
 *                resume: Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.
 *                seasons: "2"
 *                duration: N/A
 *                trailer: "https://www.youtube.com/embed/aOC8E8z_ifw"
 *                category:
 *                  categoryID: 1
 *                  categoryName: Serie
 *                cast: ["Pedro Pascal", "Carl Weathers", "Misty Rosas", "Chris Bartlett", "Rio Hackford", "Giancarlo Esposito"]
 *                genres: ["Sci-Fi", "Fantasía", "Acción"]
 *      404:
 *        description: No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get Cinema by PK."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: get Cinema by PK."
 */

/**
 * @swagger
 * /cinema:
 *  post:
 *    tags:
 *      - Cinematografías
 *    summary: Registrar una cinematografía
 *    description: Endpoint para registrar una cinematografía en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: cinema body
 *        description: cinema to create
 *        schema:
 *          type: object
 *          required:
 *            - poster
 *            - title
 *            - resume
 *            - trailer
 *            - categoryID
 *          properties:
 *            poster:
 *              type: string
 *            title:
 *              type: string
 *            resume:
 *              type: string
 *            seasons:
 *              type: string
 *            duration:
 *              type: string
 *            trailer:
 *              type: string
 *            categoryID:
 *              type: integer
 *          example:
 *            poster: ./posters/3.jpg
 *            title: The Mandalorian
 *            resume: Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.
 *            seasons: "2"
 *            duration: N/A
 *            trailer: "https://www.youtube.com/embed/aOC8E8z_ifw"
 *            categoryID: 1
 *    responses:
 *      201:
 *        description: Devuelve un JSON correspondiente a la cinematografía registrada.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *            properties:
 *              cinemaID:
 *                type: integer
 *              poster:
 *                type: string
 *              title:
 *                type: string
 *              resume:
 *                type: string
 *              seasons:
 *                type: string
 *              duration:
 *                type: string
 *              trailer:
 *                type: string
 *              categoryID:
 *                type: integer
 *            example:
 *              cinemaID: 1
 *              poster: ./posters/3.jpg
 *              title: The Mandalorian
 *              resume: Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.
 *              seasons: "2"
 *              duration: N/A
 *              trailer: "https://www.youtube.com/embed/aOC8E8z_ifw"
 *              categoryID: 1
 *      404:
 *        description: No se encontro la categoria en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: Category not found (create Cinema) -> <categoryName>"
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: create Cinema."
 */

/**
 * @swagger
 * /cinema/{cinemaID}:
 *  put:
 *    tags:
 *      - Cinematografías
 *    summary: Modificar una cinematografía
 *    description: Endpoint para modificar una cinematografía en la base de datos.
 *    operationId: "updateCinema"
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: cinema body
 *        description: cinema to update
 *        schema:
 *          type: object
 *          required:
 *            - poster
 *            - title
 *            - resume
 *            - trailer
 *            - categoryID
 *          properties:
 *            poster:
 *              type: string
 *            title:
 *              type: string
 *            resume:
 *              type: string
 *            seasons:
 *              type: string
 *            duration:
 *              type: string
 *            trailer:
 *              type: string
 *            categoryID:
 *              type: integer
 *          example:
 *            poster: ./posters/3.jpg
 *            title: The Mandalorian
 *            resume: Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.
 *            seasons: "2"
 *            duration: N/A
 *            trailer: "https://www.youtube.com/embed/aOC8E8z_ifw"
 *            categoryID: 1
 *    responses:
 *      200:
 *        description: Cinematografía actualizada.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Cinema Updated."
 *      404:
 *        description: No se encontro la categoria en la base de datos / No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              examples:
 *                conflict1:
 *                  summary: Conflicto con el ID de categoria
 *                  value:
 *                    message: "ERROR 404 - Not Found: Category not found (update Cinema) -> <categoryName>"
 *                conflict2:
 *                  summary: Conflicto con el ID de cinematografía
 *                  value:
 *                    message: "ERROR 404 - Not Found: update Cinema."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: update Cinema."
 */

/**
 * @swagger
 * /cinema/{cinemaID}:
 *  delete:
 *    tags:
 *      - Cinematografías
 *    summary: Eliminar una cinematografía
 *    description: Endpoint para eliminar una cinematografía en la base de datos.
 *    operationId: "deleteCinema"
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    responses:
 *      204:
 *        description: Cinematografía eliminada.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Cinema Deleted."
 *      404:
 *        description: No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: get cinema by PK on delete Cinema."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: delete Cinema."
 */

// CINEMA END
// CINEMA END
// CINEMA END
// CINEMA END
// CINEMA END
// CINEMA END

// CINEMA_ACTORS START
// CINEMA_ACTORS START
// CINEMA_ACTORS START
// CINEMA_ACTORS START
// CINEMA_ACTORS START
// CINEMA_ACTORS START

/**
 * @swagger
 * /cinema-actor/{cinemaID}:
 *  post:
 *    tags:
 *      - Cinematografías -> Actores
 *    summary: Añadir actores a una cinematografía
 *    description: Endpoint para añadir actores a una cinematografía en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: cinema actors body
 *        description: actors to add on cinema
 *        schema:
 *          type: object
 *          required:
 *            - actors
 *          properties:
 *            actors:
 *              type: array
 *              items:
 *                type: integer
 *          example:
 *            actors: [1, 2, 3]
 *    responses:
 *      201:
 *        description: Actores añadidos exitosamente en la cinematografía.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Actors added successfully from Cinema."
 *      404:
 *        description: No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: Cinema not found (add Actors on Cinema)."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: add Actors on Cinema."
 */

/**
 * @swagger
 * /cinema-actor/{cinemaID}:
 *  put:
 *    tags:
 *      - Cinematografías -> Actores
 *    summary: Modificar un actor añadido a una cinematografía
 *    description: Endpoint para modificar un actor añadido a una cinematografía en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: cinema actor body
 *        description: actor to edit on cinema
 *        schema:
 *          type: object
 *          required:
 *            - actor
 *          properties:
 *            actor:
 *              type: object
 *              properties:
 *                old: integer
 *                new: integer
 *          example:
 *            actor:
 *              old: 1
 *              new: 2
 *    responses:
 *      200:
 *        description: Actor modificado exitosamente en la cinematografía.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Actor edited successfully from Cinema."
 *      404:
 *        description: No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: Cinema not found (edit Actor on Cinema)."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: edit Actor on Cinema."
 */

/**
 * @swagger
 * /cinema-actor/{cinemaID}:
 *  delete:
 *    tags:
 *      - Cinematografías -> Actores
 *    summary: Eliminar actores añadidos a una cinematografía
 *    description: Endpoint para eliminar actores añadidos a una cinematografía en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: cinema actors body
 *        description: actors to add on cinema
 *        schema:
 *          type: object
 *          required:
 *            - actors
 *          properties:
 *            actors:
 *              type: array
 *              items:
 *                type: integer
 *          example:
 *            actors: [1, 2, 3]
 *    responses:
 *      204:
 *        description: Actores eliminados exitosamente en la cinematografía.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Actors deleted successfully from Cinema."
 *      404:
 *        description: No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: Cinema not found (delete Actors on Cinema)."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: delete Actors on Cinema."
 */

// CINEMA_ACTORS END
// CINEMA_ACTORS END
// CINEMA_ACTORS END
// CINEMA_ACTORS END
// CINEMA_ACTORS END
// CINEMA_ACTORS END

// CINEMA_GENRES START
// CINEMA_GENRES START
// CINEMA_GENRES START
// CINEMA_GENRES START
// CINEMA_GENRES START
// CINEMA_GENRES START

/**
 * @swagger
 * /cinema-genre/{cinemaID}:
 *  post:
 *    tags:
 *      - Cinematografías -> Generos
 *    summary: Añadir generos a una cinematografía
 *    description: Endpoint para añadir generos a una cinematografía en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: cinema genres body
 *        description: genres to add on cinema
 *        schema:
 *          type: object
 *          required:
 *            - genres
 *          properties:
 *            genres:
 *              type: array
 *              items:
 *                type: integer
 *          example:
 *            genres: [1, 2, 3]
 *    responses:
 *      201:
 *        description: Generos añadidos exitosamente en la cinematografía.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Genres added successfully from Cinema."
 *      404:
 *        description: No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: Cinema not found (add Genres on Cinema)."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: add Genres on Cinema."
 */

/**
 * @swagger
 * /cinema-genre/{cinemaID}:
 *  put:
 *    tags:
 *      - Cinematografías -> Generos
 *    summary: Modificar un genero añadido a una cinematografía
 *    description: Endpoint para modificar un genero añadido a una cinematografía en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: cinema genre body
 *        description: genre to edit on cinema
 *        schema:
 *          type: object
 *          required:
 *            - genre
 *          properties:
 *            genre:
 *              type: object
 *              properties:
 *                old: integer
 *                new: integer
 *          example:
 *            genre:
 *              old: 1
 *              new: 2
 *    responses:
 *      200:
 *        description: Genero modificado exitosamente en la cinematografía.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Genre edited successfully from Cinema."
 *      404:
 *        description: No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: Cinema not found (edit Genre on Cinema)."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: edit Genre on Cinema."
 */

/**
 * @swagger
 * /cinema-genre/{cinemaID}:
 *  delete:
 *    tags:
 *      - Cinematografías -> Generos
 *    summary: Eliminar generos añadidos a una cinematografía
 *    description: Endpoint para eliminar generos añadidos a una cinematografía en la base de datos.
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: cinemaID
 *        description: cinema identification
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *      - in: body
 *        name: cinema genres body
 *        description: genres to delete on cinema
 *        schema:
 *          type: object
 *          required:
 *            - genres
 *          properties:
 *            genres:
 *              type: array
 *              items:
 *                type: integer
 *          example:
 *            genres: [1, 2, 3]
 *    responses:
 *      204:
 *        description: Generos eliminados exitosamente en la cinematografía.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Genres deleted successfully from Cinema."
 *      404:
 *        description: No se encontro la cinematografía en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 404 - Not Found: Cinema not found (delete Genres on Cinema)."
 *      500:
 *        description: Error en el servidor.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 500 - Internal Server Error: delete Genres on Cinema."
 */

// CINEMA_GENRES END
// CINEMA_GENRES END
// CINEMA_GENRES END
// CINEMA_GENRES END
// CINEMA_GENRES END
// CINEMA_GENRES END
