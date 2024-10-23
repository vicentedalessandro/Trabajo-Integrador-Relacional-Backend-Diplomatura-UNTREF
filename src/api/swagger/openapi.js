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
 *                  id_actor:
 *                    type: integer
 *                  actor_name:
 *                    type: string
 *                example:
 *                  id_actor: 1
 *                  actor_name: Pedro Pascal
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
 *        description: Error en el servidor
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
 *      - name: "actorID"
 *        in: path
 *        description: Actor ID
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
 *                id_actor:
 *                  type: integer
 *                actor_name:
 *                  type: string
 *              example:
 *                id_actor: 1
 *                actor_name: Pedro Pascal
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
 *                message: "ERROR 404 - Not Found: get Actor by PK."
 *      500:
 *        description: Error en el servidor
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
 *    summary: Registrar un nuevo actor
 *    description: Endpoint para registrar un nuevo actor en la base de datos.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              actor_name:
 *                type: string
 *                description: Nombre del actor.
 *            example:
 *              actor_name: Pedro Pascal
 *    responses:
 *      201:
 *        description: Devuelve un JSON correspondiente al actor registrado.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id_actor:
 *                  type: integer
 *                actor_name:
 *                  type: string
 *              example:
 *                id_actor: 1
 *                actor_name: Pedro Pascal
 *      409:
 *        description: Ya existe este actor en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "ERROR 409 - Actor already exists with this name: <actor_name>"
 *      500:
 *        description: Error en el servidor
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
