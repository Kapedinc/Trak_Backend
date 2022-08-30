const express = require('express');
const router = express.Router();
const taskController = require('../../../controller/client/v1/task');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/task/create').post(auth(PLATFORM.CLIENT),checkRolePermission,taskController.addTask);
router.route('/client/api/v1/task/list').post(auth(PLATFORM.CLIENT),checkRolePermission,taskController.findAllTask);

router.route('/client/api/v1/task/count').post(auth(PLATFORM.CLIENT),checkRolePermission,taskController.getTaskCount);
router.route('/client/api/v1/task/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,taskController.softDeleteManyTask);
router.route('/client/api/v1/task/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,taskController.bulkInsertTask);

router.route('/client/api/v1/task/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,taskController.bulkUpdateTask); 
router.route('/client/api/v1/task/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,taskController.deleteManyTask);
router.route('/client/api/v1/task/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,taskController.softDeleteTask);
router.route('/client/api/v1/task/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,taskController.partialUpdateTask);   

router.route('/client/api/v1/task/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,taskController.updateTask);   
router.route('/client/api/v1/task/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,taskController.getTaskById);

router.route('/client/api/v1/task/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,taskController.deleteTask);

module.exports = router;
