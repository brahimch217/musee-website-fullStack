const express = require('express')
const router = express.Router();

const disController = require('../controller/disController');

/**
 * App Routers
 */

router.get('/', disController.homepage);
router.get('/vrt', disController.vrtPage);
router.get('/login', disController.login);
router.post('/page-login', disController.Whilelogin);
router.get('/events', disController.Events);
router.get('/collections', disController.Collections);
router.get('/discover', disController.Discover);
router.get('/Tarmim', disController.Tarmim);
router.get('/contact', disController.Contact);

module.exports = router;