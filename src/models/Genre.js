import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

const Genre = sequelize.define('Genre', {
  genreID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_genre'
  },
  genreName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'genre_name'
  }
}, {
  tableName: 'genres',
  timestamps: false
})

export { Genre }
