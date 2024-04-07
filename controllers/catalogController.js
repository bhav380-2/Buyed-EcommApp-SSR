const { settingsData } = require('../server');

module.exports = class CatalogController {

    async catalogPage(req, res) {
        try {

            const response = await fetch('https://fakestoreapi.com/products?limit=10');
            const products = await response.json();

            res.render('catalog', { products, settingsData });
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}