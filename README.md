# JustChores Backend API

Internal backend API for the JustChores application. This repository contains the server-side implementation for managing household chores and tasks.

## Project Structure

```
├── controllers/     # Request handlers and business logic
├── models/         # Database models and schemas
├── routes/         # API route definitions
├── mockdata/       # Mock data for testing
├── server.js       # Main application entry point
└── package.json    # Project dependencies and scripts
```

## Development Setup

1. Clone the repository
```bash
git clone https://github.com/Sash225/JustChores_backend.git
cd JustChores_backend
```

2. Install dependencies
```bash
npm install
```

3. Environment Configuration
Create a `.env` file in the root directory:
```
PORT=3000
MONGODB_URI=mongodb+srv://justchores:Sanjam%4023101971@justchores.lrc2dv8.mongodb.net/justChores?retryWrites=true&w=majority&appName=JustChores
```

4. Development Server
```bash
nodemon server.js
```

## API Endpoints

to be updated

## Development Guidelines

- Follow the existing code structure and naming conventions
- Add appropriate error handling and validation
- Update API documentation when adding new endpoints
- Test endpoints using Postman or similar tools before committing

## Dependencies

- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM for MongoDB
- Nodemailer - Email functionality
- Stripe - Payment processing
- Nodemon - Development server

## Notes

- This is an internal development repository
- Contact the team lead for access and permissions
- Keep sensitive information in .env file (not committed to git) 