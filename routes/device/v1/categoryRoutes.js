const express = require('express');
const router = express.Router();
const categoryController = require('../../../controller/device/v1/category');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/category/create').post(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.addCategory);
router.route('/device/api/v1/category/list').post(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.findAllCategory);

router.route('/device/api/v1/category/count').post(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.getCategoryCount);
router.route('/device/api/v1/category/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.softDeleteManyCategory);
router.route('/device/api/v1/category/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.bulkInsertCategory);

router.route('/device/api/v1/category/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.bulkUpdateCategory); 
router.route('/device/api/v1/category/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.deleteManyCategory);
router.route('/device/api/v1/category/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.softDeleteCategory);
router.route('/device/api/v1/category/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.partialUpdateCategory);   

router.route('/device/api/v1/category/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.updateCategory);   
router.route('/device/api/v1/category/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.getCategoryById);

router.route('/device/api/v1/category/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,categoryController.deleteCategory);

module.exports = router;
