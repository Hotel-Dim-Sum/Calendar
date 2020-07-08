const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const path = require('path');
const cors = require('cors');
// const Controller = require('./Controller.js');

const Calendar = require('../database/Calendar.js');

const app = express();
const port = 3001;

app.use(cors());

app.use('/', express.static(__dirname + '/../client/dist'));
// app.use('/calendar/', express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({extended: true}));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// Create/Write - post request
app.post('/api/reservation', (req, res) => {
  const {checkin, checkout, guests} = req.body;
  Calendar.insertOne({
    booking: [
      {
        checkin: checkin,
        checkout: checkout,
        guests: guests
      }
    ]
  }, (err, data) => {
    if (err) res.status(400).send('Posting failed');
    res.status(201).send(results);
  })
});

// Read - get request
// Get the booking for the reservation with id #
app.get('/api/reservation/:placeID/booking', (req,res) => {
  let placeID = getRandomInt(5);
  Calendar.find({ id: placeID })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      console.log(typeof data);
      res.send(data);
    });
});

// Update - patch request
app.patch('/api/reservation/:placeID/booking', (req, res) => {
  const placeID = req.params.placeID;
  console.log('patch request')
  const obj = req.body;
  console.log('body', obj);
  Calendar.updateOne({ id: placeID }, { $push: { bookings: obj } })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send(data);
    });
});

// Delete - patch request
app.delete('/api/reservation/:placeID/booking', (req, res) => {
  const placeID = req.params.placeID;
  Calendar.deleteOne({ id:placeID}, (err, data) => {
    if (err) res.sendStatus(400);
    console.log('delete request success', placeID);
    res.send(data);
  })
});


app.listen(port, () => console.log(`listening at http://localhost:${port}`));