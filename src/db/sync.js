import { sequelize } from './connection.js'
import '../models/Category.js'
import '../models/Actor.js'
import '../models/Genre.js'
import '../models/Cinema.js'
import '../models/CinemaActor.js'
import '../models/CinemaGenre.js'

const syncSequelize = () => {
  sequelize.sync()
    .then(() => {
      console.log('Tablas sincronizadas correctamente.')
    })
    .catch((error) => {
      console.error('Error al sincronizar las tablas:', error)
    })
}

export { syncSequelize }
