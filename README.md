# Node.js Authentication Api
A secure authentication system build with Node.js, Express, MongoDB, and JWT .
This project demonstrates user registration, login, and protected routes using JWT-based authentication.

## Features
-User Registration
-User Login
-Password hashing(bcrypt)
-Protected Routes
-Role-Based Authoriaztion(USER/ADMIN)
-MongoDB Atlas Integration
-Environment Variable Support

## Tech Stack

-Node.js
-Express.js
-MongDB+Mongoose
-JWT(jsonwebtoken)
-bcrypt
-dotenv

### Environment Variable
create a `.env` file in the project root:
```env
JWT_SECRET = secret_key
MONGO_URI= connection_string
NODE_ENV= development
PORT= 5000
```

### installation & Setup
```
git clone https://github.com/reazswe/auth.git
```
## Go to project directory
```
cd auth
```
### Install dependencies
```
npm install
```
### Start the server
```
npm start
```
Server will run on 
http://localhost:5000


### Register User
POST /api/aut/registe
Request body:
```
{
    "name":"Riazjul",
    "email":"riajul@gmail.com",
    "password":"1234567"
}
```
### Login User
POST /api/auth/login

json:
```
{
    "token":"JWT_TOKEN_HERE"
}
```
### Protected Profile Routes
GET /api/auth/profile
Header:
```
Authorization: Bearer JWT_TOKEN_HERE
```
## Testing
 use Postman to test APIs
 Ensure Authorization heaer is correctly set for protected routes

 ## Security Notes
 Password are hashed using bcrypt
 JWT tokens are uer for authentication
 Sensitive data is stored in environment variable

 ## Author
 Reazul islam
 System Engineer(Go)

 ## license