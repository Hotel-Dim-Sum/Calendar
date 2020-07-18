const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db-legacy/index.js');
const path = require('path');
const cors = require('cors');
const Controller = require('./Controller.js');

const Calendar = require('../database/db-legacy/Calendar.js');

const app = express();
const port = 3001;

app.use(cors());

app.use('/', express.static(__dirname + '/../client/dist'));
// app.use('/calendar/', express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/:placeID', Controller.find);
app.patch('/api/:placeID', Controller.patch);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
