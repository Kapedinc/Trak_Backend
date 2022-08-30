const express =  require('express');
const router =  express.Router();
router.use('/device/auth',require('./auth'));
router.use(require('./userRoutes'));
router.use(require('./categoryRoutes'));
router.use(require('./taskRoutes'));
router.use(require('./tagRoutes'));
router.use(require('./task_tagRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./projectRouteRoutes'));
router.use(require('./routeRoleRoutes'));
router.use(require('./userRoleRoutes'));

module.exports = router;
