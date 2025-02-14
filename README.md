# User Management API

## Overview
The **User Management API** is a backend service built with Node.js, Express, and MongoDB. It provides user authentication, registration, profile management, and search functionality.

## Features
- User Registration
- User Login with JWT Authentication
- Profile Retrieval
- User Search by Username or Email
- Secure Password Hashing
- Error Handling Middleware

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Token) Authentication
- bcrypt.js for Password Hashing
- Express Validator for Input Validation

## Installation

### Prerequisites
- Node.js installed
- MongoDB Atlas URL

- To get your MongoDB Atlas connection string:

1. Sign up for MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (the free tier is sufficient)
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Copy the connection string
6. Replace the placeholder in .env with your connection string
7. Update the username, password, and cluster name in the URL

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Ani-official/User-Management-API.git
   ```
2. Navigate to the project directory:
   ```sh
   cd User-Management-API
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   JWT_EXPIRES_IN=24h
   ```
5. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### User Registration
- **Endpoint:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securepassword",
    "fullName": "John Doe",
    "gender": "male",
    "dateOfBirth": "1995-06-15",
    "country": "USA"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "token": "jwt-token",
    "user": {
      "id": "user-id",
      "username": "john_doe",
      "email": "john@example.com",
      "fullName": "John Doe"
    }
  }
  ```

### User Login
- **Endpoint:** `POST /api/auth/login`
- **Body:**
  ```json
  {
    "username": "john_doe",
    "password": "securepassword"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful",
    "token": "jwt-token",
    "user": {
      "id": "user-id",
      "username": "john_doe",
      "email": "john@example.com",
      "fullName": "John Doe"
    }
  }
  ```

### Get User Profile
- **Endpoint:** `GET /api/users/profile`
- **Headers:**
  ```json
  {
    "Authorization": "Bearer jwt-token"
  }
  ```
- **Response:**
  ```json
  {
    "id": "user-id",
    "username": "john_doe",
    "email": "john@example.com",
    "fullName": "John Doe",
    "gender": "male",
    "dateOfBirth": "1995-06-15",
    "country": "USA"
  }
  ```

### Search Users
- **Endpoint:** `GET /api/users/search?query=john`
- **Response:**
  ```json
  [
    {
      "id": "user-id",
      "username": "john_doe",
      "email": "john@example.com"
    }
  ]
  ```

## Error Handling
- **400 Bad Request:** Invalid input data
- **401 Unauthorized:** Missing or invalid JWT token
- **403 Forbidden:** Invalid credentials
- **404 Not Found:** User does not exist
- **500 Internal Server Error:** Unexpected issues

## Running Tests with Postman
1. Import the API endpoints into **Postman**.
2. Use the **Bearer Token** option under Authorization for protected routes.
3. Send requests to test various features.


---



