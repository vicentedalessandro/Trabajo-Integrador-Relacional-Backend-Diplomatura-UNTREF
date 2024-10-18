import { Router } from 'express'
import { genreController as controller } from '../controllers/genre.controller.js'

const router = Router()

router.get('/', controller.getAllGenres)
  .get('/:genreID', controller.getGenreByPK)
  .post('/', controller.createGenre)
  .put('/:genreID', controller.updateGenre)
  .delete('/:genreID', controller.deleteGenre)

export { router }
