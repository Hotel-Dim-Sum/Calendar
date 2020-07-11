DROP KEYSPACE IF EXISTS hotelCalendar;
CREATE KEYSPACE IF NOT EXISTS hotelCalendar WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1;}
USE listing;

CREATE TABLE bookings(
  booking_id int,
  confirmation_id int,
  booking_date date,
  is_available boolean,
  check_in date,
  check_out date,
  cleaning_fee int,
  occupancy_tax_rate int,
  guest_id int,
  listing_id int,
  city varchar,
  guest_capacity int,
  nightly_fee int,
  rating int,
  reviews int,
  booking_id int
  adults int,
  children int,
  infants int,
  PRIMARY KEY (listing_id, booking_id)
)
