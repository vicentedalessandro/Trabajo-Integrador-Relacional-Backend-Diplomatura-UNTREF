import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

const Category = sequelize.define('Category', {
  categoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'categoryID'
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'categoryName'
  }
}, {
  tableName: 'categories',
  timestamps: false
})

export { Category }
