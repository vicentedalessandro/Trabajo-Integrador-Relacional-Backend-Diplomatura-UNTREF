import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Cinema } from './Cinema.js'
import { Genre } from './Genre.js'

const CinemaGenre = sequelize.define('CinemaGenre', {
  cinemaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    references: {
      model: Cinema,
      key: 'id_cinema'
    }
  },
  genreID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    references: {
      model: Genre,
      key: 'id_genre'
    }
  }
}, {
  tableName: 'cinema_genres',
  timestamps: false
})

export { CinemaGenre }
