
const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter({ sendHeaders: false });

writer.pipe(fs.createWriteStream('../csv/listings.csv'));
const generateListing = (count) => {
  // change to 1M
  for (let i = 1; i <= 100; i += 1, count += 1) {
    writer.write(
      {
        listing_id: count,
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
