import { loadEnvFile } from 'process'

loadEnvFile()

const HOST = process.env.MYSQL_HOST
const USER = process.env.MYSQL_USER
const PASSWORD = process.env.MYSQL_PASSWORD
const DATABASE = process.env.MYSQL_DATABASE

const mysqlConfig = {
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  dialect: 'mysql'
}

export { mysqlConfig }
