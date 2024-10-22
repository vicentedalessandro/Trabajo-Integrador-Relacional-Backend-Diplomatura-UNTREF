import { Router } from 'express'
import { cinemaGenreController as controller } from '../controllers/cinema_genre.controller.js'

const router = Router()

router.post('/:cinemaID', controller.addGenresOnCinema)
  .put('/:cinemaID', controller.editGenreOnCinema)
  .delete('/:cinemaID', controller.deleteGenresOnCinema)

export { router }
