# NestJS Auth Starter

A simple starter project for building authentication systems with NestJS using JWT (JSON Web Tokens) for secure API authentication.

## Features

- **User Authentication**: Secure login and registration using JWT tokens.
- **User Authorization**: Role-based access control (RBAC) implemented to restrict access to certain routes.
- **Password Hashing**: Passwords are securely hashed using `bcrypt`.
- **TypeORM Integration**: Comes with pre-configured TypeORM for database operations.
- **Validation**: User input is validated using `class-validator`.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)
- [PostgreSQL](https://www.postgresql.org/) (or your preferred database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/satriyarifki/nestjs-auth-starter.git

2. Install dependencies:

   ```bash
   cd nestjs-auth-starter
   npm install

3. Set up environment variables:
   
   ```bash
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=your_db_username
   DATABASE_PASSWORD=your_db_password
   DATABASE_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   
4. Running the Application

   ```bash
   npm run start:dev

The API will be running on http://localhost:3000.

## API Endpoints
### Authentication
- **POST** `/auth/signup`: Register a new user
- **POST** `/auth/login`: Log in to get a JWT token
### User
- **GET** `/users`: Get a list of all users (requires JWT)
- **GET** `/users/:id`: Get the user's details by id (requires JWT)
