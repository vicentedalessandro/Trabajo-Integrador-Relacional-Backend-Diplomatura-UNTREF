import { Actor } from '../models/Actor.js'

const getAllActors = async (req, res) => {
  const { actorName } = req.query
  try {
    if (!actorName) {
      const allActors = await Actor.findAll({ attributes: ['actorID', 'actorName'] })
      allActors.length === 0
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Actors.' })
        : res.status(200).json(allActors)
    } else {
      const actor = await Actor.findOne({ where: { actorName }, attributes: ['actorID', 'actorName'] })
      !actor
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Actors.' })
        : res.status(200).json({ message: 'Find one.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get all Actors.', error: err.message })
  }
}

const getActorByPK = async (req, res) => {
  const { actorID } = req.params
  try {
    const actor = await Actor.findByPk(actorID, { attributes: ['actorID', 'actorName'] })
    !actor
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: get Actor by PK.' })
      : res.status(200).json(actor)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get Actor by PK.', error: err.message })
  }
}

const createActor = async (req, res) => {
  const { actorName } = req.body
  try {
    const actorFound = await Actor.findOne({ where: { actorName }, attributes: ['actorID'] })
    if (actorFound) return res.status(409).json({ message: `ERROR 409 - Actor already exists with this name -> ${actorName}` })
    const actor = await Actor.create({ actorName })
    res.status(201).json(actor)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: create Actor.', error: err.message })
  }
}

const updateActor = async (req, res) => {
  const { actorID } = req.params
  const { actorName } = req.body
  try {
    const actorFound = await Actor.findOne({ where: { actorName }, attributes: ['actorID'] })
    if (actorFound) return res.status(409).json({ message: `Actor already exists with this name -> ${actorName}` })
    const result = await Actor.update({ actorName }, { where: { actorID } })
    result === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: update Actor.' })
      : res.status(200).json({ message: 'Actor Updated.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Actor.', error: err.message })
  }
}

const deleteActor = async (req, res) => {
  const { actorID } = req.params
  try {
    const actor = await Actor.findByPk(actorID, { attributes: ['actorID'] })
    if (!actor) return res.status(404).json({ message: 'ERROR 404 - Not Found: get Actor by PK on delete Actor.' })
    await actor.destroy()
    res.status(204).json({ message: 'Actor Deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Actor.', error: err.message })
  }
}

const actorController = {
  getAllActors,
  getActorByPK,
  createActor,
  updateActor,
  deleteActor
}

export { actorController }
