## Server API

### Create booking
  * POST `/api/listings/`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
    "booking_id": "Number",
    "is_available": "Boolean",
    "check_in": "Date",
    "check_out": "Date",
    "guest": {
        "adults": "Number",
        "children": "Number",
        "infants": "Number",
        "guest_id": "Number",
        "first_name": "String",
        "last_name": "String",
        "confirmation_id": "Number",
        "phone_number": "Number",
        "email": "String",
      }
    }
```


### Read one booking info
  * GET `/api/bookings/:booking_id/`

**Path Parameters:**
  * `booking_id` booking id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
    "booking_id": "Number",
    "is_available": "Boolean",
    "check_in": "Date",
    "check_out": "Date",
    "nightly_fee": "Number",
    "cleaning_fee": "Number",
    "occupancy_tax_rate": "Number",
    "guest": {
        "guest_id": "Number",
        "adults": "Number",
        "children": "Number",
        "infants": "Number",
        "first_name": "String",
        "last_name": "String",
        "confirmation_id": "Number",
        "phone_number": "Number",
        "email": "String",
      }
    }
```

### Update booking info
  * PATCH `/api/bookings/:booking_id/`

**Path Parameters:**
  * `booking_id` booking id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
   {
      "check_in": "Date",
      "check_out": "Date",
      "guest_name": "String",
      "is_available": "Boolean",
      "guest": {
        "adults": "Number",
        "children": "Number",
        "infants": "Number"
      }
    }
```


### Delete booking
  * DELETE `/api/bookings/:booking_id/`

**Path Parameters:**
  * `booking_id` booking id

**Success Status Code:** `204`
