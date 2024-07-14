# Real-Time Task Management Application

This is a Real-Time Task Management Application built with React, Node.js, Express, and MongoDB. It allows users to manage tasks, including creating, editing, completing, and deleting tasks, with real-time updates using Socket.IO.

## Features

- **Create Task**: Add new tasks with a title, description, start date, end date, start time, end time, and assigned person.
- **Edit Task**: Modify existing tasks, including updating the title, description, dates, times, and assigned person.
- **Complete Task**: Mark tasks as completed.
- **Delete Task**: Remove tasks from the list.
- **Real-Time Updates**: Get real-time updates across clients for task changes using Socket.IO.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

## Getting Started

### Clone the repository

```bash
git clone https://github.com/itsRiddhiPandey/task-manager.git
cd task-manager
```

### Install dependencies

For the backend:

```bash
cd backend
npm install
```

For the frontend:

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```
MONGO_URI= mongodb://localhost:27017/
PORT=5000
```

### Run the application

Start the backend server:

```bash
cd backend
npm start
```

Start the frontend server:

```bash
cd frontend
npm start
```

The application should now be running on `http://localhost:3000`.

## Project Structure

### Backend

- **server.js**: Entry point for the Express server and Socket.IO setup.
- **models/Task.js**: Mongoose schema for the Task model.
- **routes/tasks.js**: Express routes for task CRUD operations.

### Frontend

- **src/App.js**: Main React component with task management functionality.
- **src/App.css**: Styles for the application.

## API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

### Create a Task

```http
POST /api/tasks
```

### Update a Task

```http
PUT /api/tasks/:id
```

### Delete a Task

```http
DELETE /api/tasks/:id
```

## Contributing

Feel free to fork the repository and make changes. Pull requests are welcome.

## Acknowledgments

- Thanks to all the open-source contributors who helped build the libraries and frameworks used in this project.
