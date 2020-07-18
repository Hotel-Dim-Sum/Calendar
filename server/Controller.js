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

module.exports = {
  find
}