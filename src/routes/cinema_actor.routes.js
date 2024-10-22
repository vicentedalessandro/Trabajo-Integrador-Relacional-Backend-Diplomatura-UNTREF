import { Router } from 'express'
import { cinemaActorController as controller } from '../controllers/cinema_actor.controller.js'

const router = Router()

router.post('/:cinemaID', controller.addActorsOnCinema)
  .put('/:cinemaID', controller.editActorOnCinema)
  .delete('/:cinemaID', controller.deleteActorsOnCinema)

export { router }
