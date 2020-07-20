const db = require('../database/db-postgres/index.js');

const find = (req, res) => {
  const booking_id = req.params.booking_id;
  const q = `SELECT * FROM bookings
  INNER JOIN listings
  ON bookings.listing_id = listings.listing_id
  WHERE booking_id = '${booking_id}'`;

  db.query(q, (err, results) => {
    // console.log('GET SUCCESS', results.rows)
    res.send(results.rows);
  });
};

const update = (req, res) => {
  const booking_id = req.params.booking_id;
  const {adults, children, infants} = req.body.guests;
  console.log('adults', adults);
  console.log('children', children);
  console.log('infants', infants);
  const {checkin, checkout} = req.body;

  const q = `UPDATE bookings
  SET check_in=${checkin}, check_out='${checkout}', adults=${adults}, children=${children}, infants=${infants}
  WHERE booking_id ='${booking_id}'`;

  db.query(q, (err, results) => {
    console.log('PATCH SUCCESS');
    res.status(201);
  });
};


module.exports = {
  find, update
}