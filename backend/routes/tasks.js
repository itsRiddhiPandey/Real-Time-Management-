const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a task
router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        assignedTo: req.body.assignedTo,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            task.title = req.body.title || task.title;
            task.description = req.body.description || task.description;
            task.startDate = req.body.startDate || task.startDate;
            task.endDate = req.body.endDate || task.endDate;
            task.assignedTo = req.body.assignedTo || task.assignedTo;
            task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
            task.startTime = req.body.startTime || task.startTime;
            task.endTime = req.body.endTime || task.endTime;
            const updatedTask = await task.save();
            res.json(updatedTask);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).send('Task not found');
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
