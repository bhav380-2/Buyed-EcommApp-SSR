const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = process.env.PORT || 3000;

//intial setting values
// module.exports.settingsData = {
//     navbar: 'navbar2',
//     view: 'viewAll',
//     productCard: 'type2'
// };

app.use(express.static('public'));

// __________setting up view engine_________________
app.set('view engine', 'ejs');
app.set('views', './views');

//____________EJS______________
app.use(expressLayouts);

// extracts style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//_________BodyParser__________
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes/index'));



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


