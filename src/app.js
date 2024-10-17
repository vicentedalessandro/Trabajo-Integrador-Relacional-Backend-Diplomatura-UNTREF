import express from 'express'
import morgan from 'morgan'
import { routeNotFound } from './middleware/routeNotFound.js'
import { fetchFilms } from './service/fetchFilms.js'

const app = express()

app.disable('x-powered-by')

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

app.use('/public', express.static('./public'))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'The server is listening...' })
})

app.get('/unique-details', async (req, res) => {
  fetchFilms().then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
})

// ERROR 404 - Not found
app.use(routeNotFound)

// Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`)
})
