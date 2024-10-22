import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Category } from './Category.js'
import { Actor } from './Actor.js'
import { Genre } from './Genre.js'

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
  }
}, {
  tableName: 'cinema',
  timestamps: false
})

Cinema.belongsTo(Category, { foreignKey: 'categoryID', as: 'category' })
Category.hasOne(Cinema, { foreignKey: 'categoryID' })

Actor.belongsToMany(Cinema, { through: 'cinema_actor' })
Cinema.belongsToMany(Actor, { through: 'cinema_actor', as: 'cast' })

Genre.belongsToMany(Cinema, { through: 'cinema_genre' })
Cinema.belongsToMany(Genre, { through: 'cinema_genre', as: 'genres' })

export { Cinema }
