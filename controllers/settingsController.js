const { settingsData } = require('../server');

module.exports = class SettingsController {

    settingsPage(req, res) {
        res.render('setting', { settingsData });
    }

    updateSettings(req, res) {

        const { navbarType, productCardType, catalogView } = req.body;
        settingsData.navbar = navbarType;
        settingsData.view = catalogView;
        settingsData.productCard = productCardType;
        res.redirect('/settings');
    }
}