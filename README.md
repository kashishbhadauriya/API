# Notes Management API

A simple RESTful API built with **Node.js**, **Express.js**, and **MongoDB Atlas** for creating and retrieving notes. The API is deployed on Render and uses Mongoose for database operations.

## Features

* Create a new note
* Retrieve all notes
* MongoDB Atlas integration
* REST API architecture
* JSON request and response handling
* Cloud deployment with Render

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Render
* Postman

## Project Structure

```
project/
│
├── models/
│   ├── users.js
│   └── notes.js
│
├── views/
│   ├── login.ejs
│   └── signup.ejs
│
├── .env
├── .gitignore
├── package.json
└── index.js
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
```

### Run the Server

```bash
node index.js
```

Server will start on:

```
http://localhost:3000
```

## API Endpoints

### Home Route

#### GET /

Returns a welcome message.

Response:

```json
{
  "message": "Welcome to the Home Page"
}
```

---

### Create a Note

#### POST /notes

Request Body:

```json
{
  "title": "Learning Express.js",
  "name": "Aarav Sharma"
}
```

Response:

```json
{
  "message": "Note created successfully",
  "note": {
    "title": "Learning Express.js",
    "name": "Aarav Sharma"
  }
}
```

---

### Get All Notes

#### GET /notes

Response:

```json
{
  "message": "Notes retrieved successfully",
  "notes": [
    {
      "title": "Learning Express.js",
      "name": "Aarav Sharma"
    }
  ]
}
```

## Deployment

The API is deployed on Render.

Steps followed:

1. Push code to GitHub.
2. Create a Web Service on Render.
3. Add the MongoDB connection string as an Environment Variable.
4. Deploy the application.
5. Configure MongoDB Atlas Network Access to allow Render access.

## Testing

API endpoints can be tested using:

* Postman
* Thunder Client
* cURL

## Learning Outcomes

This project helped in understanding:

* REST API development
* Express.js routing
* MongoDB Atlas integration
* Mongoose models and database operations
* Environment variables with dotenv
* Cloud deployment using Render
* API testing using Postman

## Author

**Kashish Bhadauriya**

B.Tech CSE (AI)
PSIT Kanpur
