import { Cinema } from '../models/Cinema.js'
import { CinemaActor } from '../models/CinemaActor.js'
import { sequelize } from '../db/connection.js'

const addActorsOnCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { actors } = req.body
  try {
    await sequelize.transaction(async (t) => {
      const cinema = await Cinema.findByPk(cinemaID, { transaction: t, attributes: ['cinemaID'] })
      if (!cinema) {
        return res.status(404).json({ message: 'ERROR 404 - Not Found: Cinema not found (add Actors on Cinema).' })
      }
      const records = actors.map((actorID) => ({ cinemaID: parseInt(cinemaID), actorID }))
      await CinemaActor.bulkCreate(records, { transaction: t, ignoreDuplicates: true })
    })
    res.status(201).json({ message: 'Actors added successfully from Cinema.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: add Actors on Cinema.', error: err.message })
  }
}

const editActorOnCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { actor } = req.body
  try {
    const cinema = await Cinema.findByPk(cinemaID, { attributes: ['cinemaID'] })
    if (!cinema) {
      return res.status(404).json({ message: 'ERROR 404 - Not Found: Cinema not found (edit Actor on Cinema).' })
    }
    await CinemaActor.update({ actorID: actor.new }, { where: { cinemaID, actorID: actor.old } })
    res.status(200).json({ message: 'Actor edited successfully from Cinema.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: edit Actor on Cinema.', error: err.message })
  }
}

const deleteActorsOnCinema = async (req, res) => {
  const { cinemaID } = req.params
  const { actors } = req.body
  try {
    const cinema = await Cinema.findByPk(cinemaID, { attributes: ['cinemaID'] })
    if (!cinema) {
      return res.status(404).json({ message: 'ERROR 404 - Not Found: Cinema not found (delete Actors on Cinema).' })
    }
    await CinemaActor.destroy({ where: { cinemaID, actorID: actors } })
    res.status(204).json({ message: 'Actors deleted successfully from Cinema.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Actors on Cinema.', error: err.message })
  }
}

const cinemaActorController = {
  addActorsOnCinema,
  editActorOnCinema,
  deleteActorsOnCinema
}

export { cinemaActorController }
