import express from 'express'
import morgan from 'morgan'
import { loadEnvFile } from 'process'
import { swaggerSpecs, swaggerUI } from './config/swagger.config.js'
import { router as actorRouter } from './routes/actor.routes.js'
import { router as categoryRouter } from './routes/category.routes.js'
import { router as genreRouter } from './routes/genre.routes.js'
import { router as cinemaRouter } from './routes/cinema.routes.js'
import { router as cinemaActorRouter } from './routes/cinema_actor.routes.js'
import { router as cinemaGenreRouter } from './routes/cinema_genre.routes.js'
import { sequelizeMiddleware } from './middleware/sequelize.middleware.js'
import { notFound } from './middleware/notfound.middleware.js'
import { fetchFilms } from './service/fetchFilms.js'

loadEnvFile()

const app = express()

app.disable('x-powered-by')

// Middlewares
app.use(express.json())
app.use('/public', express.static('./public'))
app.use(morgan('dev'))

app.get('/', async (req, res) => {
  res.status(200).json({ message: 'The server is listening...' })
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpecs))

app.get('/unique-details', async (req, res) => {
  fetchFilms().then((data) => {
    res.status(200).json(data)
  }).catch((err) => {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get all unique details.', error: err.message })
  })
})

app.use(sequelizeMiddleware)

// Routers
app.use('/actor', actorRouter)
app.use('/category', categoryRouter)
app.use('/genre', genreRouter)
app.use('/cinema', cinemaRouter)
app.use('/cinema-actor', cinemaActorRouter)
app.use('/cinema-genre', cinemaGenreRouter)

// ERROR 404 - Not found
app.use(notFound)

// Server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/`)
})
