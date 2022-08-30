const express = require('express');
const router = express.Router();
const categoryController = require('../../../controller/client/v1/category');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/category/create').post(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.addCategory);
router.route('/client/api/v1/category/list').post(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.findAllCategory);

router.route('/client/api/v1/category/count').post(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.getCategoryCount);
router.route('/client/api/v1/category/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.softDeleteManyCategory);
router.route('/client/api/v1/category/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.bulkInsertCategory);

router.route('/client/api/v1/category/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.bulkUpdateCategory); 
router.route('/client/api/v1/category/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.deleteManyCategory);
router.route('/client/api/v1/category/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.softDeleteCategory);
router.route('/client/api/v1/category/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.partialUpdateCategory);   

router.route('/client/api/v1/category/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.updateCategory);   
router.route('/client/api/v1/category/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.getCategoryById);

router.route('/client/api/v1/category/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,categoryController.deleteCategory);

module.exports = router;
