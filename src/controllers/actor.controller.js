import { sequelize } from '../db/connection.js'
import { Actor } from '../models/Actor.js'

const getAllActors = async (req, res) => {
  const { actorName } = req.query
  try {
    await sequelize.authenticate()
    await Actor.sync()
    if (!actorName) {
      const allActor = await Actor.findAll()
      allActor.length === 0
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Actors.' })
        : res.status(200).json(allActor)
    } else {
      const actor = await Actor.findOne({ where: { actorName } })
      !actor
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Actors.' })
        : res.status(200).json({ message: 'Find one.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get all Actors', err })
  }
}

const getActorByPK = async (req, res) => {
  const { actorID } = req.params
  try {
    await sequelize.authenticate()
    await Actor.sync()
    const actor = await Actor.findByPk(actorID)
    !actor
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: get Actor by PK.' })
      : res.status(200).json(actor)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get Actor by PK.', err })
  }
}

const createActor = async (req, res) => {
  const { actorName } = req.body
  try {
    const response = await fetch(`http://localhost:3000/actor?actorName=${actorName}`)
    if (response.status === 200) return res.status(409).json({ message: `Actor already exists with this name: ${actorName}` })
    await sequelize.authenticate()
    await Actor.sync()
    const actor = await Actor.create({ actorName })
    res.status(201).json(actor)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: create Actor.', err })
  }
}

const updateActor = async (req, res) => {
  const { actorID } = req.params
  const { actorName } = req.body
  try {
    const response = await fetch(`http://localhost:3000/actor?actorName=${actorName}`)
    if (response.status === 200) return res.status(409).json({ message: `Actor already exists with this name: ${actorName}` })
    await sequelize.authenticate()
    await Actor.sync()
    const result = await Actor.update({ actorName }, { where: { actorID } })
    result === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: update Actor.' })
      : res.status(200).json({ message: 'Actor Updated.', result })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Actor.', err })
  }
}

const deleteActor = async (req, res) => {
  const { actorID } = req.params
  try {
    const actor = await Actor.findByPk(actorID)
    if (!actor) return res.status(404).json({ message: 'ERROR 404 - Not Found: get Actor by PK on delete Actor.' })
    await sequelize.authenticate()
    await Actor.sync()
    await actor.destroy()
    res.status(204).json({ message: 'Actor Deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Actor.', err })
  }
}

const actorController = { getAllActors, getActorByPK, createActor, updateActor, deleteActor }

export { actorController }
