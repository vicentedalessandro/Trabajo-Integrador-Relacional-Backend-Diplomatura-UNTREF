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
 *        description: Actor actualizado
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *              example:
 *                message: "Actor Updated."
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
 *        description: Actor eliminado
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
 *        description: Error en el servidor
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
