const express = require('express');
const router = express.Router();
const task_tagController = require('../../../controller/device/v1/task_tag');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/task_tag/create').post(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.addTask_tag);
router.route('/device/api/v1/task_tag/list').post(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.findAllTask_tag);

router.route('/device/api/v1/task_tag/count').post(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.getTask_tagCount);
router.route('/device/api/v1/task_tag/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.softDeleteManyTask_tag);
router.route('/device/api/v1/task_tag/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.bulkInsertTask_tag);

router.route('/device/api/v1/task_tag/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.bulkUpdateTask_tag); 
router.route('/device/api/v1/task_tag/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.deleteManyTask_tag);
router.route('/device/api/v1/task_tag/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.softDeleteTask_tag);
router.route('/device/api/v1/task_tag/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.partialUpdateTask_tag);   

router.route('/device/api/v1/task_tag/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.updateTask_tag);   
router.route('/device/api/v1/task_tag/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.getTask_tagById);

router.route('/device/api/v1/task_tag/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,task_tagController.deleteTask_tag);

module.exports = router;
