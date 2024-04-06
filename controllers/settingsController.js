const {settingsData} = require('../server');

module.exports = class SettingsController{

    settingsPage(req,res){

        console.log("setting data inside settings Page",settingsData);
        res.render('setting',{settingsData});
     

    }

    updateSettings(req,res){
        // Handle form submission and update settings
    // (Note: Implement logic to handle form data and update settings accordingly)
    console.log(req.body); // Example: { navbar: 'navbar1', productCard: 'productCard1', catalogView: 'carousel' }
    res.redirect('/settings');

    }
}