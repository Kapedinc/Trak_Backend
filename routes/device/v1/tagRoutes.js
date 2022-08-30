const express = require('express');
const router = express.Router();
const tagController = require('../../../controller/device/v1/tag');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/tag/create').post(auth(PLATFORM.DEVICE),checkRolePermission,tagController.addTag);
router.route('/device/api/v1/tag/list').post(auth(PLATFORM.DEVICE),checkRolePermission,tagController.findAllTag);

router.route('/device/api/v1/tag/count').post(auth(PLATFORM.DEVICE),checkRolePermission,tagController.getTagCount);
router.route('/device/api/v1/tag/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,tagController.softDeleteManyTag);
router.route('/device/api/v1/tag/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,tagController.bulkInsertTag);

router.route('/device/api/v1/tag/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,tagController.bulkUpdateTag); 
router.route('/device/api/v1/tag/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,tagController.deleteManyTag);
router.route('/device/api/v1/tag/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,tagController.softDeleteTag);
router.route('/device/api/v1/tag/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,tagController.partialUpdateTag);   

router.route('/device/api/v1/tag/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,tagController.updateTag);   
router.route('/device/api/v1/tag/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,tagController.getTagById);

router.route('/device/api/v1/tag/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,tagController.deleteTag);

module.exports = router;
