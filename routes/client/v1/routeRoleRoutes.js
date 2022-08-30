const express = require('express');
const router = express.Router();
const routeRoleController = require('../../../controller/client/v1/routeRole');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/client/api/v1/routerole/create').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.addRouteRole);
router.route('/client/api/v1/routerole/addBulk').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.bulkInsertRouteRole);

router.route('/client/api/v1/routerole/list').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.findAllRouteRole);

router.route('/client/api/v1/routerole/count').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.getRouteRoleCount);
router.route('/client/api/v1/routerole/updateBulk').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.bulkUpdateRouteRole); 
router.route('/client/api/v1/routerole/softDeleteMany').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.softDeleteManyRouteRole);
router.route('/client/api/v1/routerole/deleteMany').post(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.deleteManyRouteRole);
router.route('/client/api/v1/routerole/softDelete/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.softDeleteRouteRole);
router.route('/client/api/v1/routerole/partial-update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.partialUpdateRouteRole);   

router.route('/client/api/v1/routerole/update/:id').put(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.updateRouteRole);   
router.route('/client/api/v1/routerole/:id').get(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.getRouteRoleById);

router.route('/client/api/v1/routerole/delete/:id').delete(auth(PLATFORM.CLIENT),checkRolePermission,checkRolePermission,routeRoleController.deleteRouteRole);

module.exports = router;
