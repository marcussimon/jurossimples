const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const contatoController = require('../controllers/contatoController');
const musicasController = require('../controllers/musicasController'); 

router.get('/', homeController.index);
router.get('/contato', contatoController.index);
router.get('/musicas', musicasController.index);

module.exports = router;
