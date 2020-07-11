const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writer = csvWriter({ sendHeaders: false });
writer.pipe(fs.createWriteStream('../csv/usersTable.csv'));


const generateUsers = (userCount, bookingCount) => {
  for (let i = 1; i <= 5; i += 1, userCount += 1, bookingCount += 1) {
    writer.write(
      {
        user_id: userCount,
        booking_id: bookingCount,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        city: faker.address.city(),
      },
    );
  }
};
generateUsers(1, 1);
generateUsers(6, 6);

writer.end();