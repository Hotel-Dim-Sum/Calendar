-- psql -U postgres -d admin < schema.sql
\connect admin
DROP DATABASE IF EXISTS airbnb;
CREATE DATABASE airbnb;

\connect airbnb

-- one airbnb home listing
CREATE TABLE listings (
  listing_id              serial,
  city                    VARCHAR(25),
  occupancy_tax_rate      DECIMAL,
  max_capacity            SMALLINT,
  nightly_fee             INT,
  cleaning_fee            INT,
  rating                  INT,
  reviews                 INT,
  PRIMARY KEY (listing_id)
);
-- ALTER TABLE listings ADD PRIMARY KEY (listing_id)


-- many bookings
CREATE TABLE bookings(
  booking_id           serial,
  listing_id           INT,
  check_in             DATE,
  check_out            DATE,
  adults              INT,
  children            INT,
  infants             INT,
  night_fee           SMALLINT,
  cleaning_fee        SMALLINT,
  occupancy_tax_rate SMALLINT,
  PRIMARY KEY (booking_id),
  FOREIGN KEY (listing_id) REFERENCES listings (listing_id)
);

-- ALTER TABLE bookings ADD PRIMARY KEY(booking_id);
-- ALTER TABLE bookings
--   ADD CONSTRAINT bookings_listing_id_fkay FOREIGN KEY (listing_id) REFERENCES listings (listing_id)

-- many users
CREATE TABLE users (
  user_id       serial,
  booking_id    INT,
  first_name     varchar(25),
  last_name     varchar(25),
  city          varchar(25),
  PRIMARY KEY (user_id),
  FOREIGN KEY (booking_id) REFERENCES bookings (booking_id)
);

-- ALTER TABLE users ADD PRIMARY KEY (user_id);
-- ALTER TABLE users
--   ADD CONSTRAINT users_booking_id_fkey FOREIGN KEY (booking_id) REFERENCES bookings(booking_id);