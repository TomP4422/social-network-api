# Social Network API

## Description
This project is a backend API for a social network application, built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**. It allows users to share thoughts, react to friends' thoughts, and manage a friend list. This API demonstrates CRUD operations and relationships using NoSQL.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd social-network-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start MongoDB locally or use MongoDB Atlas for a remote database.

## Usage
1. To run the server in development mode with automatic restarts:
   ```bash
   npm run dev
   ```
2. To run the server in production mode:
   ```bash
   npm start
   ```
3. Test the API routes using tools like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

## API Routes
### User Routes
- **GET** `/api/users` - Retrieve all users.
- **GET** `/api/users/:id` - Retrieve a single user by ID, including their thoughts and friend list.
- **POST** `/api/users` - Create a new user.
- **PUT** `/api/users/:id` - Update a user by ID.
- **DELETE** `/api/users/:id` - Delete a user by ID and their associated thoughts.

### Friend Routes
- **POST** `/api/users/:userId/friends/:friendId` - Add a friend to a user's friend list.
- **DELETE** `/api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list.

### Thought Routes
- **GET** `/api/thoughts` - Retrieve all thoughts.
- **GET** `/api/thoughts/:id` - Retrieve a single thought by ID.
- **POST** `/api/thoughts` - Create a new thought and associate it with a user.
- **PUT** `/api/thoughts/:id` - Update a thought by ID.
- **DELETE** `/api/thoughts/:id` - Delete a thought by ID.

### Reaction Routes
- **POST** `/api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
- **DELETE** `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Nodemon** (for development)

## License
This project is licensed under the MIT License.

