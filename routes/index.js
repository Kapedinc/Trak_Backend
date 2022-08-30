const express = require('express');
const router =  express.Router();

router.use(require('./device/v1/index'));
router.use(require('./client/v1/index'));

module.exports = router;
