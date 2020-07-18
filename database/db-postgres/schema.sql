-- psql -U postgres -d airbnb
DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

\connect airbnb

-- one airbnb home listing
CREATE TABLE listings (
  listing_id              serial PRIMARY KEY,
  city                    VARCHAR(25),
  occupancy_tax_rate      DECIMAL,
  max_capacity            SMALLINT,
  nightly_fee             INT,
  cleaning_fee            INT,
  rating                  decimal,
  reviews                 INT
);


-- many bookings
CREATE TABLE bookings(
  booking_id           serial PRIMARY KEY,
  check_in             DATE,
  check_out            DATE,
  adults              INT,
  children            INT,
  infants             INT,
  night_fee           SMALLINT,
  cleaning_fee        SMALLINT,
  occupancy_tax_rate decimal,
  listing_id int,
  FOREIGN KEY (listing_id) REFERENCES listings (listing_id)
);

-- many users
CREATE TABLE users (
  user_id       serial PRIMARY KEY,
  first_name     varchar(25),
  last_name     varchar(25),
  payment_type VARCHAR(20),
  booking_id INT,
  FOREIGN KEY (booking_id) REFERENCES bookings (booking_id)
);


--  psql -U postgres -d admin < schema.sql
-- listing csv
COPY listings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/listing1.csv' DELIMITER',' CSV;
COPY listings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/listing2.csv' DELIMITER',' CSV;

-- booking csv
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking1.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking2.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking3.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking4.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking5.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking6.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking7.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking8.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking9.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking10.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking11.csv' DELIMITER',' CSV;
COPY bookings FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/booking12.csv' DELIMITER',' CSV;


-- users csv
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user1.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user2.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user3.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user4.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user5.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user6.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user7.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user8.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user9.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user10.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user11.csv' DELIMITER',' CSV;
COPY users FROM '/Users/admin/Desktop/system design/Calendar/database/db-postgres/csv/user12.csv' DELIMITER',' CSV;
