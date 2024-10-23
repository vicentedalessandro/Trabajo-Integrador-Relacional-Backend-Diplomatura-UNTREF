import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

const Actor = sequelize.define('Actor', {
  actorID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'actorID'
  },
  actorName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'actorName'
  }
}, {
  tableName: 'actors',
  timestamps: false
})

export { Actor }
