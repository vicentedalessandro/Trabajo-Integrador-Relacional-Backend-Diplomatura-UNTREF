import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Category } from './Category.js'

const Cinema = sequelize.define('Cinema', {
  cinemaID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_cinema'
  },
  poster: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'poster'
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'title'
  },
  resume: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'resume'
  },
  seasons: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'N/A',
    field: 'seasons'
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'N/A',
    field: 'duration'
  },
  trailer: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'trailer'
  },
  categoryID: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id_category'
    }
  }
}, {
  tableName: 'cinema',
  timestamps: false
})

export { Cinema }
