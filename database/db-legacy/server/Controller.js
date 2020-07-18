const Calendar = require('../database/db-legacy/Calendar.js');

// CREATE
const post = (req, res) => {
  const { checkin, checkout, guests } = req.body;
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
};

// READ
const find = (req, res) => {
  let placeID = 2;
  Calendar.find({ id: placeID })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      console.log(typeof data);
      res.send(data);
    });
};

// UPDATE
const patch = (req, res) => {
  const placeID = req.params.placeID;
  console.log('patch request');
  const obj = req.body;
  console.log('body', obj);
  Calendar.updateOne({ id: placeID }, { $push: { bookings: obj } })
    .exec((err, data) => {
      if (err) res.sendStatus(400);
      res.send(data);
    });
};

// DELETE
const deleteListing = (req, res) => {
  const listingId = req.params.listingId;
  Calendar.deleteOne({ id: listingId }, (err, data) => {
    if (err) res.sendStatus(400);
    res.send(data);
  })
};

module.exports = {
  post, find, patch, deleteListing
}
