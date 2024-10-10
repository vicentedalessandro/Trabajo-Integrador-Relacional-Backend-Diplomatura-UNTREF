import { Router } from 'express'
// import { connection } from '../db/connection.js'

const router = Router()

// Routes for CRUD
router.get('/', (req, res) => {
  // Get all content
})

router.get('/:id', (req, res) => {
  // Get content by ID
})

router.post('/', (req, res) => {
  // Add new content
})

router.put('/:id', (req, res) => {
  // Update content by ID
})

router.delete('/:id', (req, res) => {
  // Delete content by ID
})

export { router }
