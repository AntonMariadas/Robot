// const express = require('express');
require('./config/dbConfig');
const data = require('./api/data');

// const app = express();
// const port = 8282;

data.refreshCompaniesData();

// server express a supprimer avant déploiment
// app.listen(port, () => console.log(`listening on http//:localhost:${port}`));