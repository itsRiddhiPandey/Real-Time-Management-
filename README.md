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
git clone https://github.com/itsRiddhiPandey/Real-Time-Management-.git
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

---


![3](https://github.com/user-attachments/assets/f0de57ac-c8eb-47f9-a6cd-9837766126d1)

### Application UI
After running the application, you'll see a clean and intuitive interface for managing tasks:
- **Add Task Form**: At the top is a form to add new tasks. Enter the title, description, start date, end date, start time, and the person assigned to the task.
- **Task List**: Below the form, the tasks are displayed in a list. Each task shows the title, description, start and end dates, times, and the person assigned.
- **Task Actions**: Each task has buttons to complete, delete, or edit the task, allowing easy management.


---



https://github.com/user-attachments/assets/f8fc4eca-efa6-4de4-9277-b6bb5c21179b



## Application Demo Video

This video demonstrates the core features and functionality of the Real-Time Task Management Application:

1. **Creating a Task**:
   - The video starts by showing how to add a new task. The user enters the title, description, start date, end date, start time, end time, and the person assigned to the task. 
   - The new task appears in the task list immediately after clicking the "Add Task" button.

2. **Editing a Task**:
   - Next, the video demonstrates editing an existing task. 
   - The user clicks the "Edit" button, modifies the task details in the form, and saves the changes.
   - The updated task details are displayed in the task list.

3. **Completing a Task**:
   - The video shows how to mark a task as completed.
   - The user clicks the "Complete" button, and the task is marked as completed with a visual indication (e.g., text strike-through and background color change).

4. **Deleting a Task**:
   - Finally, the video demonstrates how to delete a task.
   - The user clicks the "Delete" button, and the task is removed from the task list.

Throughout the video, you can see the application's real-time updates, responsive design, and user-friendly interface. This demonstration highlights how the task manager efficiently handles task creation, editing, completion, and deletion.

---


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

## Acknowledgments

- Thanks to all the open-source contributors who helped build the libraries and frameworks used in this project.
