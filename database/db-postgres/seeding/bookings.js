const faker = require('faker');
const fs = require('fs');
const nf = new Intl.NumberFormat();


const generateSeed = (start, filenum) => {
  const writeBookings = fs.createWriteStream(`../csv/booking${filenum}.csv`);
  function writeTenMillionUsers(writer, encoding, callback) {
    let i = 5000000; // entries per csv file
    let id = start;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;

        const datein = faker.date.between('2020-08-10', '2020-08-15');
        const dateout = faker.date.between('2020-08-15', '2020-08-25');
        const formatDatein = datein.getFullYear() + "-" + (datein.getMonth() + 1) + "-" + datein.getDate()
        const formatDateout = dateout.getFullYear() + "-" + (dateout.getMonth() + 1) + "-" + dateout.getDate()
        const booking_id = id;
        const checkin = formatDatein;
        const checkout = formatDateout;
        const adults = Math.floor(Math.random() * 6) + 1;
        const children = Math.floor(Math.random() * 2);
        const infants = Math.floor(Math.random() * 2);
        const nightly_fee = Math.floor(Math.random() * 300) + 60;
        const cleaning_fee = Math.ceil(Math.random() * 60) + 20;
        const occupancy_tax_rate = ((Math.round((Math.random()*.05)*1000)/1000) + .08).toFixed(2);

        // multiple bookings per listing
        const listing_id= faker.random.number(9999999) + 1;

        const data = `${booking_id},${checkin},${checkout},${adults},${children},${infants},${nightly_fee},${cleaning_fee},${occupancy_tax_rate},${listing_id}\n`;

        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
        }
        if (id % 1000000 === 0) {
          console.log(`Generated ${nf.format(id)}`);
        }
      } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
    write();
  }

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
generateSeed(65000000, 9);
generateSeed(70000000, 10);
// generateSeed(75000000, 11);
// generateSeed(80000000, 12);