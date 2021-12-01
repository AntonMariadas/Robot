const express = require('express');
require('./config/dbConfig');
const cron = require('node-cron');
const data = require('./api/data');

const app = express();
const port = process.env.PORT || 8282;

// Rafraichissement une fois par semaine
cron.schedule('0 0 * * 0', () => {
    data.refreshCompaniesData();
});


app.listen(port, () => console.log(`listening on http//:localhost:${port}`));