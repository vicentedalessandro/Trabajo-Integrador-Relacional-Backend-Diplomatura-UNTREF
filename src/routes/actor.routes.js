import { Router } from 'express'
import { actorController as controller } from '../controllers/actor.controller.js'

const router = Router()

router.get('/', controller.getAllActors)
  .get('/:actorID', controller.getActorByPK)
  .post('/', controller.createActor)
  .put('/:actorID', controller.updateActor)
  .delete('/:actorID', controller.deleteActor)

export { router }
