const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter({ sendHeaders: false });
writer.pipe(fs.createWriteStream('../csv/users.csv'));


const generateUsers = (count) => {
  // change to 1m
  for (let i = 1; i <= 10; i += 1, count += 1) {
    writer.write(
      {
        user_id: count,
        booking_id: count,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        city: faker.address.city(),
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