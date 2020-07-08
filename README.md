## Server API

### Get reservation info
  * GET `/api/reservation/:placeID/booking`

**Path Parameters:**
  * `placeID` reservation id

**Success Status Code:** `200`

**Returns:** Object

```
    {
      id: Number,
      nightly_fee: Number,
      cleaning_fee: Number,
      occupancy_tax_rate: Number,
      avg_rating: Number,
      reviews: Number,
      city: String,
      max_capacity: Number,
      books: [Object]
    }
```

### Add reservation booking
  * POST `/api/reservation`

**Success Status Code:** `201`

**Request Body**: Expects Object with the following keys.

```
    {
      checkin: Number,
      checkout: Number,
      guests: Number
    }
```


### Update reservation info
  * PATCH `/api/reservation/:placeID/booking`

**Path Parameters:**
  * `placeID` reservation id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```
    {
      checkin: Date,
      checkout: Date,
      guests: {
          adults: Number,
          children: Number,
          infants: Number
        }
    }
```

### Delete reservation
  * DELETE `/api/reservation/:placeID/booking`

**Path Parameters:**
  * `placeID` reservation id

**Success Status Code:** `204`
