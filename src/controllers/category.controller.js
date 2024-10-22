import { Category } from '../models/Category.js'

const getAllCategories = async (req, res) => {
  const { categoryName } = req.query
  try {
    if (!categoryName) {
      const allCategories = await Category.findAll({ attributes: ['id_category', 'category_name'] })
      allCategories.length === 0
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Categories.' })
        : res.status(200).json(allCategories)
    } else {
      const category = await Category.findOne({ where: { categoryName }, attributes: ['id_category', 'category_name'] })
      !category
        ? res.status(404).json({ message: 'ERROR 404 - Not Found: get all Categories.' })
        : res.status(200).json({ message: 'Find one.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get all Categories', error: err.message })
  }
}

const getCategoryByPK = async (req, res) => {
  const { categoryID } = req.params
  try {
    const category = await Category.findByPk(categoryID, { attributes: ['id_category', 'category_name'] })
    !category
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: get Category by PK.' })
      : res.status(200).json(category)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: get Category by PK.', error: err.message })
  }
}

const createCategory = async (req, res) => {
  const { categoryName } = req.body
  try {
    const categoryFound = await Category.findOne({ where: { categoryName }, attributes: ['id_category'] })
    if (categoryFound) return res.status(409).json({ message: `Category already exists with this name: ${categoryName}` })
    const category = await Category.create({ categoryName })
    res.status(201).json(category)
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: create Category.', error: err.message })
  }
}

const updateCategory = async (req, res) => {
  const { categoryID } = req.params
  const { categoryName } = req.body
  try {
    const categoryFound = await Category.findOne({ where: { categoryName }, attributes: ['id_category'] })
    if (categoryFound) return res.status(409).json({ message: `Category already exists with this name: ${categoryName}` })
    const result = await Category.update({ categoryName }, { where: { categoryID } })
    result === 0
      ? res.status(404).json({ message: 'ERROR 404 - Not Found: update Category.' })
      : res.status(200).json({ message: 'Category Updated.', result })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: update Category.', error: err.message })
  }
}

const deleteCategory = async (req, res) => {
  const { categoryID } = req.params
  try {
    const category = await Category.findByPk(categoryID, { attributes: ['id_category'] })
    if (!category) return res.status(404).json({ message: 'ERROR 404 - Not Found: get Actor by PK on delete Category.' })
    await category.destroy()
    res.status(204).json({ message: 'Category Deleted.' })
  } catch (err) {
    res.status(500).json({ message: 'ERROR 500 - Internal Server Error: delete Category.', error: err.message })
  }
}

const categoryController = {
  getAllCategories,
  getCategoryByPK,
  createCategory,
  updateCategory,
  deleteCategory
}

export { categoryController }
