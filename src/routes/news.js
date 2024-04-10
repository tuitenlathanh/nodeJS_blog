const express = require('express');
const router = express.Router();
const NewsController = require('../app/controllers/NewController');



//newcontroller.index
router.use('/:slug', NewsController.show);
router.use('/',NewsController.index);


module.exports = router;