const express = require('express');
const router = express.Router();
const projectRouteController = require('../../../controller/device/v1/projectRoute');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/projectroute/create').post(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.addProjectRoute);
router.route('/device/api/v1/projectroute/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.bulkInsertProjectRoute);

router.route('/device/api/v1/projectroute/list').post(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.findAllProjectRoute);

router.route('/device/api/v1/projectroute/count').post(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.getProjectRouteCount);
router.route('/device/api/v1/projectroute/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.bulkUpdateProjectRoute); 
router.route('/device/api/v1/projectroute/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.softDeleteManyProjectRoute);
router.route('/device/api/v1/projectroute/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.deleteManyProjectRoute);
router.route('/device/api/v1/projectroute/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.softDeleteProjectRoute);
router.route('/device/api/v1/projectroute/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.partialUpdateProjectRoute);   

router.route('/device/api/v1/projectroute/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.updateProjectRoute);   
router.route('/device/api/v1/projectroute/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.getProjectRouteById);

router.route('/device/api/v1/projectroute/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,projectRouteController.deleteProjectRoute);

module.exports = router;
