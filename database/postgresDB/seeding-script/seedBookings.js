const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter({ sendHeaders: false });

writer.pipe(fs.createWriteStream('../csv/bookingsTable.csv'));
const generateBookings = () => {
  for (let i = 1; i <= 10; i += 1) {
    const datein = String(faker.date.between('2020-08-10', '2020-08-15'));
    const dateout = String(faker.date.between('2020-08-15', '2020-08-25'));
    writer.write(
      {
        booking_id: i,
        listing_id: i,
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
generateBookings();

writer.end();
