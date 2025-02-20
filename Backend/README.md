# Backend API Documentation

## Endpoints

### POST /users/register

### Method: POST

### Description:
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body:
The request body should be a JSON object containing the following fields:
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, required): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

### Example Request:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (201):
- **Description**: User registered successfully.
- **Body**: A JSON object containing the authentication token and user details.
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Client Error (400):
- **Description**: Validation error or missing required fields.
- **Body**: A JSON object containing the validation errors.
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First Name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Notes:
- Ensure that the `Content-Type` header is set to `application/json` when making the request.
- The password is hashed before being stored in the database.

### POST /users/login

**Description:** Login a user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
- **200 OK**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
      // ...other user fields...
    }
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "password must be atleast 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Invalid Email or Password"
  }
  ```

**Notes:**
- The `email` field must be a valid email address.
- The `password` field must be at least 6 characters long.

### GET /users/profile

**Description:** Get the profile of the authenticated user.

**Headers:**
- `Authorization`: Bearer token

**Response:**
- **200 OK**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
    // ...other user fields...
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

**Notes:**
- The `Authorization` header must contain a valid JWT token.

### GET /users/logout

**Description:** Logout the authenticated user.

**Headers:**
- `Authorization`: Bearer token

**Response:**
- **200 OK**
  ```json
  {
    "message": "Logged Out"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

**Notes:**
- The `Authorization` header must contain a valid JWT token.
- The token will be added to a blacklist to prevent further use.

### POST /captains/register

**Description:** Register a new captain.

**Request Body:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "capacity": 4,
    "plate": "ABC123",
    "vehicleType": "car"
  }
}
```

**Response:**
- **201 Created**
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "capacity": 4,
        "plate": "ABC123",
        "vehicleType": "car"
      }
      // ...other captain fields...
    },
    "token": "jwt_token"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email address",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Vehicle color is required",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Vehicle plate is required",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Vehicle capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Vehicle type is required",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

**Notes:**
- The `email` field must be a valid email address.
- The `password` field must be at least 6 characters long.
- The `vehicle` object must contain valid `color`, `capacity`, `plate`, and `vehicleType` fields.
