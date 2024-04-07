const { settingsData } = require('../server');

module.exports = class SettingsController {

    settingsPage(req, res) {
        res.render('setting');
    }
}