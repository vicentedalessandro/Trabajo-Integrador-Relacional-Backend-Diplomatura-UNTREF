import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Cinema } from './Cinema.js'
import { Actor } from './Actor.js'

const CinemaActor = sequelize.define('CinemaActor', {
  cinemaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    references: {
      model: Cinema,
      key: 'id_cinema'
    }
  },
  actorID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    references: {
      model: Actor,
      key: 'id_actor'
    }
  }
}, {
  tableName: 'Cinema_Actors',
  timestamps: false
})

export { CinemaActor }
