import { Sequelize } from 'sequelize'
import { mysqlConfig } from '../config/mysql.config.js'

const sequelize = new Sequelize(mysqlConfig.database, mysqlConfig.user, mysqlConfig.password, {
  host: mysqlConfig.host,
  dialect: mysqlConfig.dialect, // Motor de base
  port: 3306,
  pool: {
    min: 0, // Mínimo de conexiones en el grupo
    max: 5, // Máximo de conexiones en el grupo
    acquire: 30000, // Tiempo máximo para liberar conexiones inactivas
    idle: 10000 // Tiempo máximo para cerrar conexiones inactivas
  }
})

const testSequelizeAuth = () => {
  sequelize.authenticate()
    .then(() => {
      console.log('Database connection successful.')
    })
    .catch(err => {
      console.error('Error connecting to database:', err)
    })
    .finally(() => {
      sequelize.close()
      console.log('Database connection closed.')
    })
}

export { sequelize, testSequelizeAuth }