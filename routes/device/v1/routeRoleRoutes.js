const express = require('express');
const router = express.Router();
const routeRoleController = require('../../../controller/device/v1/routeRole');
const {
  auth,checkRolePermission,
} = require('../../../middleware');
const { PLATFORM } =  require('../../../constants/authConstant');
router.route('/device/api/v1/routerole/create').post(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.addRouteRole);
router.route('/device/api/v1/routerole/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.bulkInsertRouteRole);

router.route('/device/api/v1/routerole/list').post(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.findAllRouteRole);

router.route('/device/api/v1/routerole/count').post(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.getRouteRoleCount);
router.route('/device/api/v1/routerole/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.bulkUpdateRouteRole); 
router.route('/device/api/v1/routerole/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.softDeleteManyRouteRole);
router.route('/device/api/v1/routerole/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.deleteManyRouteRole);
router.route('/device/api/v1/routerole/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.softDeleteRouteRole);
router.route('/device/api/v1/routerole/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.partialUpdateRouteRole);   

router.route('/device/api/v1/routerole/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.updateRouteRole);   
router.route('/device/api/v1/routerole/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.getRouteRoleById);

router.route('/device/api/v1/routerole/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,routeRoleController.deleteRouteRole);

module.exports = router;
