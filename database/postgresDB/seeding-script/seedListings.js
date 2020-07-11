
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter({ sendHeaders: false });

writer.pipe(fs.createWriteStream('../csv/listingsTable.csv'));
const generateListing = () => {
  for (let i = 1; i <= 10; i += 1) {
    writer.write(
      {
        listing_id:i,
        city: faker.address.city(),
        occupancy_tax_rate: ((Math.round((Math.random()*.05)*1000)/1000) + .08).toFixed(2),
        max_capacity: Math.floor(Math.random() * (15 - 2) + 2),
        nightly_fee: Math.floor(Math.random() * 300) + 60,
        cleaning_fee: Math.ceil(Math.random() * 60) + 20,
        rating: (Math.random() * (5 - 1) + 1).toFixed(2),
        review: Math.floor(Math.random() * (250 - 1) + 1),
      },
    );
  }
};
generateListing();
console.log('Generated 5');

// console.log('Generated 300,000');
// generateListing();
// console.log('Generated 400,000');
// generateListing();
// console.log('Generated 500,000');
// generateListing();
// console.log('Generated 600,000');
// generateListing();
// console.log('Generated 700,000');
// generateListing();
// console.log('Generated 800,000');
// generateListing();
// console.log('Generated 900,000');

writer.end();
