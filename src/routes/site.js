const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//newcontroller.index
router.use('/:slug', siteController.sreach);
router.use('/', siteController.index);

module.exports = router;