const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesCtrl = require('../controllers/sauces');

router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/', auth, saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getSauceById);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.put('/:id', auth, saucesCtrl.modifySauce);

module.exports = router;