const express = require('express');
const router = express.Router();
const userRoleController = require('../../../controller/device/v1/userRole');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/userrole/create').post(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.addUserRole);
router.route('/device/api/v1/userrole/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.bulkInsertUserRole);

router.route('/device/api/v1/userrole/list').post(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.findAllUserRole);

router.route('/device/api/v1/userrole/count').post(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.getUserRoleCount);
router.route('/device/api/v1/userrole/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.bulkUpdateUserRole); 
router.route('/device/api/v1/userrole/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.softDeleteManyUserRole);
router.route('/device/api/v1/userrole/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.deleteManyUserRole);
router.route('/device/api/v1/userrole/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.softDeleteUserRole);
router.route('/device/api/v1/userrole/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.partialUpdateUserRole);   

router.route('/device/api/v1/userrole/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.updateUserRole);   
router.route('/device/api/v1/userrole/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.getUserRoleById);

router.route('/device/api/v1/userrole/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,userRoleController.deleteUserRole);

module.exports = router;
