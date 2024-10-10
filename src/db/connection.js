import mysql from 'mysql2'
import { connectionConfig } from '../config/connection.config.js'

const connection = mysql.createConnection(connectionConfig)

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err)
    return
  }
  console.log('Connected to MySQL database')
})

export { connection }
