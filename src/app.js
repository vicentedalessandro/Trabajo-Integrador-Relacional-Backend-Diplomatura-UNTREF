import express from 'express'
import morgan from 'morgan'
import { loadEnvFile } from 'process'
import { router as actorRouter } from './routes/actor.routes.js'
import { router as categoryRouter } from './routes/category.routes.js'
import { router as genreRouter } from './routes/genre.routes.js'
import { router as cinemaRouter } from './routes/cinema.routes.js'
import { sequelizeMiddleware } from './middleware/sequelize.middleware.js'
import { routeNotFound } from './middleware/routeNotFound.js'
import { fetchFilms } from './service/fetchFilms.js'

loadEnvFile()

const app = express()

app.disable('x-powered-by')

// Middlewares
app.use(express.json())
app.use('/public', express.static('./public'))
app.use(morgan('dev'))
app.use(sequelizeMiddleware)

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

// Routers
app.use('/actor', actorRouter)
app.use('/category', categoryRouter)
app.use('/genre', genreRouter)
app.use('/cinema', cinemaRouter)

// ERROR 404 - Not found
app.use(routeNotFound)

// Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`)
})
