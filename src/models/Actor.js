import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

const Actor = sequelize.define('Actor', {
  actorID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id_actor'
  },
  actorName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'actor_name'
  }
}, {
  tableName: 'Actors',
  timestamps: false
})

export { Actor }
