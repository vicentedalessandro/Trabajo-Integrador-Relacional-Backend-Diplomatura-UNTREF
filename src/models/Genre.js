import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

const Genre = sequelize.define('Genre', {
  genreID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'genreID'
  },
  genreName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'genreName'
  }
}, {
  tableName: 'genres',
  timestamps: false
})

export { Genre }
