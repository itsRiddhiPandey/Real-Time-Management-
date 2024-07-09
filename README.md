# Real-Time-Management-

## Description

This project is a Real-Time Task Management Application designed to help users manage their tasks efficiently. It allows users to create, update, complete, and delete tasks with real-time updates using web sockets. The application is built with a modern tech stack, including React for the frontend and Node.js with Express for the backend, and MongoDB for the database.

## Features

- **Create Tasks:** Users can create tasks with titles, descriptions, start and end dates, start and end times, and assign them to other users.
- **Update Tasks:** Users can update task details.
- **Complete Tasks:** Users can mark tasks as completed.
- **Delete Tasks:** Users can delete tasks.
- **Real-Time Updates:** The application uses web sockets (Socket.IO) to provide real-time updates, allowing users to see changes immediately.
- **Responsive UI:** The application has a responsive and user-friendly interface with animations and hover effects for an enhanced user experience.

## Technology Stack

- **Frontend:** React, Axios, CSS for styling and animations.
- **Backend:** Node.js, Express, Mongoose.
- **Database:** MongoDB.
- **Real-Time Communication:** Socket.IO.
- **Environment Variables:** dotenv.

## Installation

### Backend

1. Clone the repository.
2. Navigate to the backend directory:
    ```bash
    cd backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file and add your MongoDB URI:
    ```
    MONGO_URI=mongodb://localhost:27017/taskmanager
    ```
5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```

## Running the Application

1. Ensure the backend server is running on port 5000.
2. Ensure the frontend server is running on port 3000.
3. Open your browser and navigate to `http://localhost:3000`.

## Acknowledgements

- Thanks to the developers of React, Node.js, Express, MongoDB, and Socket.IO for their amazing tools and frameworks.
![Screenshot 2024-07-10 000526](https://github.com/itsRiddhiPandey/Real-Time-Management-/assets/146252460/c68d5018-ec00-4398-824c-0dfa0870f64c)
