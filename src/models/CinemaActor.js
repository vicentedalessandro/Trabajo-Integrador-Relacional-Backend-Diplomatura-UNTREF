import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Cinema } from './Cinema.js'
import { Actor } from './Actor.js'

const CinemaActor = sequelize.define('CinemaActor', {
  cinemaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field: 'id_cinema',
    references: {
      model: Cinema,
      key: 'id_cinema'
    }
  },
  actorID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field: 'id_actor',
    references: {
      model: Actor,
      key: 'id_actor'
    }
  }
}, {
  tableName: 'cinema_actors',
  timestamps: false
})

export { CinemaActor }
