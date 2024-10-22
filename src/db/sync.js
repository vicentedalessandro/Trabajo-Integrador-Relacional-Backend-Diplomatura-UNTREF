import { sequelize } from './connection.js'


const syncSequelize = () => {
  sequelize.sync()
    .then(() => {
      console.log('Tablas sincronizadas correctamente.')
    })
    .catch((error) => {
      console.error('Error al sincronizar las tablas:', error)
    })
}

export { syncSequelize }
