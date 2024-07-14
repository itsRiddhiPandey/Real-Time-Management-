const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

const Task = require('./models/Task');  // Ensure Task model is correctly defined

app.use(cors());
app.use(express.json());

// Import routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('taskAdded', async () => {
        const tasks = await Task.find();
        io.emit('taskUpdated', tasks);
    });

    socket.on('taskUpdated', async () => {
        const tasks = await Task.find();
        io.emit('taskUpdated', tasks);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        server.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
