const express = require('express');
const router = express.Router();
const saucesCtrl = require('../controllers/sauces')

router.post('/', saucesCtrl.createSauce);
router.get('/', saucesCtrl.getAllSauces);

module.exports = router;