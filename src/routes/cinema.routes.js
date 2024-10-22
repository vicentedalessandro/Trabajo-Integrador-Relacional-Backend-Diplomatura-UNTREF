import { Router } from 'express'
import { cinemaController as controller } from '../controllers/cinema.controller.js'

const router = Router()

router.get('/', controller.getAllCinema)
  .get('/:cinemaID', controller.getCinemaByPK)
  .post('/', controller.createCinema)
  .put('/:cinemaID', controller.updateCinema)
  .delete('/:cinemaID', controller.deleteCinema)

export { router }
