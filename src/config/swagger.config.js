import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const swaggerDefinition = {
  info: {
    title: 'CRUD en Sequelize para una plataforma de Streaming',
    version: '1.0.0',
    description: 'Documentación de la API'
  },
  basePath: '/'
}

const options = { swaggerDefinition, apis: ['./src/api/swagger/openapi.js'] }
const swaggerSpecs = swaggerJSDoc(options)

export { swaggerSpecs, swaggerUI }
