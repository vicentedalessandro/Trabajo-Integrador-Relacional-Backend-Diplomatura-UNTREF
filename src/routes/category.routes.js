import { Router } from 'express'
import { categoryController as controller } from '../controllers/category.controller.js'

const router = Router()

router.get('/', controller.getAllCategories)
  .get('/:categoryID', controller.getCategoryByPK)
  .post('/', controller.createCategory)
  .put('/:categoryID', controller.updateCategory)
  .delete('/:categoryID', controller.deleteCategory)

export { router }
