const express = require('express');
const router = express.Router();
const projectRouteController = require('../../../controller/client/v1/projectRoute');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/projectroute/create').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.addProjectRoute);
router.route('/client/api/v1/projectroute/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.bulkInsertProjectRoute);

router.route('/client/api/v1/projectroute/list').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.findAllProjectRoute);

router.route('/client/api/v1/projectroute/count').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.getProjectRouteCount);
router.route('/client/api/v1/projectroute/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.bulkUpdateProjectRoute); 
router.route('/client/api/v1/projectroute/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.softDeleteManyProjectRoute);
router.route('/client/api/v1/projectroute/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.deleteManyProjectRoute);
router.route('/client/api/v1/projectroute/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.softDeleteProjectRoute);
router.route('/client/api/v1/projectroute/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.partialUpdateProjectRoute);   

router.route('/client/api/v1/projectroute/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.updateProjectRoute);   
router.route('/client/api/v1/projectroute/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.getProjectRouteById);

router.route('/client/api/v1/projectroute/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,projectRouteController.deleteProjectRoute);

module.exports = router;
