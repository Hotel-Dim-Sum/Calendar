const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter({ sendHeaders: false });

writer.pipe(fs.createWriteStream('../csv/bookings.csv'));
const generateBookings = (count) => {
  // change to 1m
  for (let i = 1; i <= 10; i += 1, count += 1) {
    const datein = String(faker.date.between('2020-08-10', '2020-08-15'));
    const dateout = String(faker.date.between('2020-08-15', '2020-08-25'));
    writer.write(
      {
        booking_id: count,
        listing_id: count,
        checkin: datein.slice(0, 15),
        checkout: dateout.slice(0, 15),
        adults: Math.floor(Math.random() * 6) + 1,
        children: Math.floor(Math.random() * 2),
        infants: Math.floor(Math.random() * 2),
        nightly_fee: Math.floor(Math.random() * 300) + 60,
        cleaning_fee: Math.ceil(Math.random() * 60) + 20,
        occupancy_tax_rate: ((Math.round((Math.random()*.05)*1000)/1000) + .08).toFixed(2),
      },
    );
  }
};

// generateListing(1);
// console.log('Generated 100,000');
// generateListing(100001);
// console.log('Generated 200,000');
// generateListing(200001);
// console.log('Generated 300,000');
// generateListing(300001);
// console.log('Generated 400,000');
// generateListing(400001);
// console.log('Generated 500,000');
// generateListing(500001);
// console.log('Generated 600,000');
// generateListing(600001);
// console.log('Generated 700,000');
// generateListing(700001);
// console.log('Generated 800,000');
// generateListing(800001);
// console.log('Generated 900,000');
// generateListing(900001);
// console.log('Generated 1,000,000');

writer.end();
