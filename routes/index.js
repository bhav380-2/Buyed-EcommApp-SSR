const express = require('express');

const router = express.Router();

const CatalogController = require('../controllers/catalogController');
const SettingsController = require('../controllers/settingsController');

const catalogController = new CatalogController();
const settingController = new SettingsController();


// ____get requests_____
router.get('/',catalogController.catalogPage);
router.get('/settings',settingController.settingsPage);


module.exports = router;

