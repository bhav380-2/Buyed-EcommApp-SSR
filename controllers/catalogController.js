const {settingsData} = require('../server');

module.exports = class CatalogController{

    async catalogPage(req,res){
        try {

            console.log(settingsData);
             
            // Fetch data from the provided API
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            
            // Render the catalog page with fetched data
            res.render('catalog', { products ,settingsData});
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).send('Internal Server Error');
        }

    }
}