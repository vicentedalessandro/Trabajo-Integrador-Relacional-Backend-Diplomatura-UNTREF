import { sequelize } from '../db/connection.js'
import '../models/Category.js'
import '../models/Actor.js'
import '../models/Genre.js'
import '../models/Cinema.js'
import '../models/CinemaActor.js'
import '../models/CinemaGenre.js'

const sequelizeMiddleware = async (req, res, next) => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')

    await sequelize.sync()
    console.log('All models were synchronized successfully.')

    next()
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: Database connection or sync failed.', err })
  }
}

export { sequelizeMiddleware }
