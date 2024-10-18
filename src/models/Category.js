import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

const Category = sequelize.define('Category', {
  categoryID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_category'
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'category_name'
  }
}, {
  tableName: 'categories',
  timestamps: false
})

export { Category }
