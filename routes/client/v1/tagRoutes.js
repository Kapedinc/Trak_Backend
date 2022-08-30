const express = require('express');
const router = express.Router();
const tagController = require('../../../controller/client/v1/tag');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/tag/create').post(auth(PLATFORM.CLIENT),checkRolePermission,tagController.addTag);
router.route('/client/api/v1/tag/list').post(auth(PLATFORM.CLIENT),checkRolePermission,tagController.findAllTag);

router.route('/client/api/v1/tag/count').post(auth(PLATFORM.CLIENT),checkRolePermission,tagController.getTagCount);
router.route('/client/api/v1/tag/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,tagController.softDeleteManyTag);
router.route('/client/api/v1/tag/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,tagController.bulkInsertTag);

router.route('/client/api/v1/tag/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,tagController.bulkUpdateTag); 
router.route('/client/api/v1/tag/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,tagController.deleteManyTag);
router.route('/client/api/v1/tag/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,tagController.softDeleteTag);
router.route('/client/api/v1/tag/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,tagController.partialUpdateTag);   

router.route('/client/api/v1/tag/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,tagController.updateTag);   
router.route('/client/api/v1/tag/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,tagController.getTagById);

router.route('/client/api/v1/tag/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,tagController.deleteTag);

module.exports = router;
