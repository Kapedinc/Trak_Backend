const categoryDb = require('../../../../data-access/categoryDb');
const taskDb = require('../../../../data-access/taskDb');
const categorySchema = require('../../../../validation/schema/category');
const createValidation = require('../../../../validation')(categorySchema.createSchema);
const updateValidation = require('../../../../validation')(categorySchema.updateSchema);
const filterValidation = require('../../../../validation')(categorySchema.filterValidationSchema);
const categoryController = require('./category');

// use-cases imports with dependency injection
const addCategoryUsecase = require('../../../../use-case/category/addCategory')({
  categoryDb,
  createValidation 
});
const findAllCategoryUsecase = require('../../../../use-case/category/findAllCategory')({
  categoryDb,
  filterValidation
});
const getCategoryCountUsecase = require('../../../../use-case/category/getCategoryCount')({
  categoryDb,
  filterValidation
});
const softDeleteManyCategoryUsecase = require('../../../../use-case/category/softDeleteManyCategory')({
  categoryDb,
  taskDb
});
const bulkInsertCategoryUsecase = require('../../../../use-case/category/bulkInsertCategory')({ categoryDb });
const bulkUpdateCategoryUsecase = require('../../../../use-case/category/bulkUpdateCategory')({ categoryDb });
const deleteManyCategoryUsecase = require('../../../../use-case/category/deleteManyCategory')({
  categoryDb,
  taskDb
});
const softDeleteCategoryUsecase = require('../../../../use-case/category/softDeleteCategory')({
  categoryDb,
  taskDb
});
const partialUpdateCategoryUsecase = require('../../../../use-case/category/partialUpdateCategory')({
  categoryDb,
  updateValidation
});
const updateCategoryUsecase = require('../../../../use-case/category/updateCategory')({
  categoryDb,
  updateValidation 
});
const getCategoryUsecase = require('../../../../use-case/category/getCategory')({
  categoryDb,
  filterValidation
});
const deleteCategoryUsecase = require('../../../../use-case/category/deleteCategory')({
  categoryDb,
  taskDb
});

// controller methods mapping
const addCategory = categoryController.addCategory(addCategoryUsecase);
const findAllCategory = categoryController.findAllCategory(findAllCategoryUsecase);
const getCategoryCount = categoryController.getCategoryCount(getCategoryCountUsecase);
const softDeleteManyCategory = categoryController.softDeleteManyCategory(softDeleteManyCategoryUsecase);
const bulkInsertCategory = categoryController.bulkInsertCategory(bulkInsertCategoryUsecase);
const bulkUpdateCategory = categoryController.bulkUpdateCategory(bulkUpdateCategoryUsecase);
const deleteManyCategory = categoryController.deleteManyCategory(deleteManyCategoryUsecase);
const softDeleteCategory = categoryController.softDeleteCategory(softDeleteCategoryUsecase);
const partialUpdateCategory = categoryController.partialUpdateCategory(partialUpdateCategoryUsecase);
const updateCategory = categoryController.updateCategory(updateCategoryUsecase);
const getCategoryById = categoryController.getCategory(getCategoryUsecase);
const deleteCategory = categoryController.deleteCategory(deleteCategoryUsecase);

module.exports = {
  addCategory,
  findAllCategory,
  getCategoryCount,
  softDeleteManyCategory,
  bulkInsertCategory,
  bulkUpdateCategory,
  deleteManyCategory,
  softDeleteCategory,
  partialUpdateCategory,
  updateCategory,
  getCategoryById,
  deleteCategory,
};