require('./config/dbConfig');
const data = require('./api/data');
// const express = require('express');

// const app = express();
// const port = process.env.PORT || 8282;

data.refreshCompaniesData();

// app.listen(port, () => console.log(`listening on http//:localhost:${port}`));