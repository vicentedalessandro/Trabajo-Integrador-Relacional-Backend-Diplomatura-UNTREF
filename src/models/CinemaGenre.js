import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Genre } from './Genre.js'
import { Cinema } from './Cinema.js'

const CinemaGenre = sequelize.define('CinemaGenre', {
  cinemaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field: 'cinemaID',
    references: {
      model: Cinema,
      key: 'cinemaID'
    }
  },
  genreID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    field: 'genreID',
    references: {
      model: Genre,
      key: 'genreID'
    }
  }
}, {
  tableName: 'cinema_genres',
  timestamps: false
})

Genre.belongsToMany(Cinema, {
  through: CinemaGenre,
  foreignKey: 'genreID'
})
Cinema.belongsToMany(Genre, {
  through: CinemaGenre,
  foreignKey: 'cinemaID',
  as: 'genres'
})

export { CinemaGenre }
