--cqlsh -u cassandra -p cassandra
-- use airbnb;
-- < schema.cql
DROP KEYSPACE IF EXISTS airbnb;
CREATE KEYSPACE airbnb
  WITH REPLICATION = {
  'class': 'SimpleStrategy',
  'replication_factor': 1
  };

USE airbnb;

CREATE TABLE bookings(
  listing_id int,
  city text,
  occupancy_tax_rate float,
  max_capacity int,
  nightly_fee int,
  cleaning_fee int,
  rating float,
  reviews int,
  booking_id int,
  check_in date,
  check_out date,
  adults int,
  children int,
  infants int,
  user_id int,
  first_name text,
  last_name text,
  payment_type text,
  PRIMARY KEY (listing_id, booking_id)
);

INSERT INTO bookings(listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) VALUES (229391332,'santa clara', 0.1, 3, 4, 5, 6.5,5,3,'2020-02-29', '2020-03-01', 5,2,3, 123131313, 'kim','dang','cash');

COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking1.csv' with delimiter =',';
COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking2.csv' with delimiter =',';
COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking3.csv' with delimiter =',';
COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking4.csv' with delimiter =',';
COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking5.csv' with delimiter =',';
COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking6.csv' with delimiter =',';
COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking7.csv' with delimiter =',';
COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking8.csv' with delimiter =',';

COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking9.csv' with delimiter =',';

COPY bookings (listing_id, city,occupancy_tax_rate, max_capacity, nightly_fee, cleaning_fee, rating, reviews, booking_id, check_in, check_out, adults, children, infants, user_id, first_name, last_name, payment_type) FROM '/Users/admin/Desktop/system design/Calendar/database/cassandraDB/booking10.csv' with delimiter =',';

-- to do
-- cqlsh -u cassandra -p cassandra
-- use airbnb;
