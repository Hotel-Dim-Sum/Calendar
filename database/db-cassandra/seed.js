const faker = require('faker');
const fs = require('fs');
const nf = new Intl.NumberFormat();

const payments = ['Visa', 'PayPal', 'MasterCard', 'Discover', 'American Express', 'Check'];

const generatePayment = () => {
  const i = Math.floor(Math.random() * payments.length);
  return payments[i];
};

const datein = faker.date.between('2020-08-10', '2020-08-15');
const dateout = faker.date.between('2020-08-15', '2020-08-25');
const formatDatein = datein.getFullYear() + "-" + (datein.getMonth() + 1) + "-" + datein.getDate()
const formatDateout = dateout.getFullYear() + "-" + (dateout.getMonth() + 1) + "-" + dateout.getDate()

const generateSeed = (start, num) => {
  const writeBookings = fs.createWriteStream(`./booking${num}.csv`);
  const writeTenMillionBookings = (writer, encoding, callback) => {
    let i = 5000000; // 5m of entries
    let id = start;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;

        const listing_id = faker.random.number(9999999) + 1;
        const city = faker.address.city();
        const occupancy_tax_rate = ((Math.round((Math.random()*.05)*1000)/1000) + .08).toFixed(2);
        const max_capacity = Math.floor(Math.random() * (15 - 2) + 2);
        const nightly_fee = Math.floor(Math.random() * 300) + 60;
        const cleaning_fee = Math.ceil(Math.random() * 60) + 20;
        const rating = (Math.random() * (5 - 1) + 1).toFixed(2);
        const review = Math.floor(Math.random() * (250 - 1) + 1);
        const booking_id = id;
        const checkin = formatDatein;
        const checkout = formatDateout;
        const adults = Math.floor(Math.random() * 6) + 1;
        const children = Math.floor(Math.random() * 2);
        const infants = Math.floor(Math.random() * 2);
        const user_id = faker.random.number(9999999) + 1;
        const first_name = faker.name.firstName();
        const last_name = faker.name.lastName();
        const payment_type = generatePayment();

        const data = `${listing_id},${city},${occupancy_tax_rate},${max_capacity},${nightly_fee},${cleaning_fee},${rating},${review},${booking_id},${checkin},${checkout},${adults},${children},${infants},${user_id},${first_name},${last_name},${payment_type}\n`;

        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
        // if (id % 1000000 === 0) { // 5M
        //   console.log(`Generated ${nf.format(id)}`);
        // }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  };

  writeTenMillionBookings(writeBookings, 'utf-8', () => {
    writeBookings.end();
  });
};

generateSeed(50000000, 11);
generateSeed(55000000, 12);
generateSeed(60000000, 13);
generateSeed(65000000, 14);
generateSeed(70000000, 15);