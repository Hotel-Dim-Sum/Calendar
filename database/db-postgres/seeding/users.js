const faker = require('faker');
const fs = require('fs');
const nf = new Intl.NumberFormat();

const payments = ['Visa', 'PayPal', 'MasterCard', 'Discover', 'American Express', 'Check'];

const generatePayment = () => {
  const i = Math.floor(Math.random() * payments.length);
  return payments[i];
};

const generateSeed = (start, filenum) => {
  const writeBookings = fs.createWriteStream(`../csv/user${filenum}.csv`);
  const writeTenMillionUsers = (writer, encoding, callback) => {
    let i = 5000000;
    let id = start;

    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;

        // 50M users
        const user_id = id;
        const first_name = faker.name.firstName();
        const last_name = faker.name.lastName();
        const payment_type = generatePayment();

        // 1 user can have multiple bookings
        const booking_id = faker.random.number(50000000) + 1;

        const data = `${user_id},${first_name},${last_name},${payment_type},${booking_id}\n`;

        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
        if (id % 10000000 === 0) {
          console.log(`Generated ${nf.format(id)}`);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  };

  writeTenMillionUsers(writeBookings, 'utf-8', () => {
    writeBookings.end();
  });

};

// generateSeed(0, 1);
// generateSeed(10000000, 2);
// generateSeed(20000000, 3);
// generateSeed(30000000, 4);
// generateSeed(40000000, 5);
// generateSeed(50000000, 6);
// generateSeed(55000000, 7);
// generateSeed(60000000, 8);
// generateSeed(65000000, 9);
// generateSeed(70000000, 10);
generateSeed(75000000, 11);
generateSeed(80000000, 12);