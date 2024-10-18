import { sequelize } from '../db/connection.js'
import { Category } from '../models/Category.js'

const getAllCategories = async (req, res) => {
  const { categoryName } = req.query
  try {
    await sequelize.authenticate()
    await Category.sync()
    if (!categoryName) {
      const allCategories = await Category.findAll()
      allCategories.length === 0
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Categories.' })
        : res.status(200).json(allCategories)
    } else {
      const category = await Category.findOne({ where: { categoryName } })
      !category
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Categories.' })
        : res.status(200).json({ message: 'Find one.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get all Categories', err })
  }
}

const getCategoryByPK = async (req, res) => {
  const { categoryID } = req.params
  try {
    await sequelize.authenticate()
    await Category.sync()
    const category = await Category.findByPk(categoryID)
    !category
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: get Category by PK.' })
      : res.status(200).json(category)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get Category by PK.', err })
  }
}

const createCategory = async (req, res) => {
  const { categoryName } = req.body
  try {
    const response = await fetch(`http://localhost:3000/category?categoryName=${categoryName}`)
    if (response.status === 200) return res.status(409).json({ message: `Category already exists with this name: ${categoryName}` })
    await sequelize.authenticate()
    await Category.sync()
    const category = await Category.create({ categoryName })
    res.status(201).json(category)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: create Category.', err })
  }
}

const updateCategory = async (req, res) => {
  const { categoryID } = req.params
  const { categoryName } = req.body
  try {
    const response = await fetch(`http://localhost:3000/category?categoryName=${categoryName}`)
    if (response.status === 200) return res.status(409).json({ message: `Category already exists with this name: ${categoryName}` })
    await sequelize.authenticate()
    await Category.sync()
    const result = await Category.update({ categoryName }, { where: { categoryID } })
    result === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: update Category.' })
      : res.status(200).json({ message: 'Category Updated.', result })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Category.', err })
  }
}

const deleteCategory = async (req, res) => {
  const { categoryID } = req.params
  try {
    const category = await Category.findByPk(categoryID)
    if (!category) return res.status(404).json({ message: 'ERROR 404 - Not Found: get Actor by PK on delete Category.' })
    await sequelize.authenticate()
    await Category.sync()
    await category.destroy()
    res.status(204).json({ message: 'Category Deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Category.', err })
  }
}

const categoryController = { getAllCategories, getCategoryByPK, createCategory, updateCategory, deleteCategory }

export { categoryController }
