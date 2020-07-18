const faker = require('faker');
const fs = require('fs');
const nf = new Intl.NumberFormat();

const generateSeed = (start, filenum) => {
  const writeListings = fs.createWriteStream(`../csv/listing${filenum}.csv`);
  function writeTenMillionListings(writer, encoding, callback) {
    let i = 5000000;
    let id = start;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;

        const listing_id = id;
        const city = faker.address.city();
        const occupancy_tax_rate = ((Math.round((Math.random()*.05)*1000)/1000) + .08).toFixed(2);
        const max_capacity = Math.floor(Math.random() * (15 - 2) + 2);
        const nightly_fee = Math.floor(Math.random() * 300) + 60;
        const cleaning_fee = Math.ceil(Math.random() * 60) + 20;
        const rating = (Math.random() * (5 - 1) + 1).toFixed(2);
        const review = Math.floor(Math.random() * (250 - 1) + 1);

        const data = `${listing_id},${city},${occupancy_tax_rate},${max_capacity},${nightly_fee},${cleaning_fee},${rating},${review}\n`;

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

  writeTenMillionListings(writeListings, 'utf-8', () => {
    writeListings.end();
  });
};

generateSeed(0, 1);
generateSeed(5000000, 2);