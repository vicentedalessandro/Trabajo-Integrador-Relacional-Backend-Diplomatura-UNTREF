import express from 'express'
import morgan from 'morgan'
import { routeNotFound } from './middleware/routeNotFound.js'

const app = express()

app.disable('x-powered-by')

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'The server is listening...' })
})

// ERROR 404 - Not found
app.use(routeNotFound)

// Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`)
})
