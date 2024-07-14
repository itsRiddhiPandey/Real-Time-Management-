import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000');

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tasks');
        setTasks(res.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();

    socket.on('taskUpdated', (updatedTasks) => {
      setTasks(updatedTasks);
    });

    return () => {
      socket.off('taskUpdated');
    };
  }, []);

  const addTask = async () => {
    try {
      const newTask = {
        title,
        description,
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        assignedTo,
        startTime,
        endTime,
      };

      const res = await axios.post('http://localhost:5000/api/tasks', newTask);

      setTasks((prevTasks) => [...prevTasks, res.data]);
      socket.emit('taskAdded', res.data);

      // Clear the input fields
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      setAssignedTo('');
      setStartTime('');
      setEndTime('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const completeTask = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: true });
      const updatedTasks = tasks.map((task) =>
        task._id === id ? { ...task, completed: true } : task
      );
      setTasks(updatedTasks);
      socket.emit('taskUpdated', updatedTasks);
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
      socket.emit('taskUpdated', updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const startEditing = (task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setStartDate(new Date(task.startDate).toISOString().substring(0, 10));
    setEndDate(new Date(task.endDate).toISOString().substring(0, 10));
    setAssignedTo(task.assignedTo);
    setStartTime(task.startTime);
    setEndTime(task.endTime);
  };

  const editTask = async () => {
    try {
      const updatedTask = {
        ...editingTask,
        title,
        description,
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        assignedTo,
        startTime,
        endTime,
      };

      const res = await axios.put(`http://localhost:5000/api/tasks/${editingTask._id}`, updatedTask);
      const updatedTasks = tasks.map((task) =>
        task._id === editingTask._id ? res.data : task
      );

      setTasks(updatedTasks);
      socket.emit('taskUpdated', updatedTasks);

      // Clear the input fields and exit editing mode
      setEditingTask(null);
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      setAssignedTo('');
      setStartTime('');
      setEndTime('');
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
    setAssignedTo('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Start Time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="time"
          placeholder="End Time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Assigned To"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />
        <button onClick={editingTask ? editTask : addTask}>
          {editingTask ? 'Save Task' : 'Add Task'}
        </button>
        {editingTask && <button onClick={cancelEdit}>Cancel</button>}
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id} className={`task ${task.completed ? 'completed' : ''}`}>
            <h2>{task.title}</h2>
            <span>{task.description}</span>

            <div className="task-details">
              <p>Start Date: {new Date(task.startDate).toLocaleDateString()}</p>
              <p>End Date: {new Date(task.endDate).toLocaleDateString()}</p>
              <p>Start Time: {task.startTime}</p>
              <p>End Time: {task.endTime}</p>
              <p>Assigned To: {task.assignedTo}</p>
            </div>
            <div>
              <button onClick={() => completeTask(task._id)} className="complete-btn">Complete</button>
              <button onClick={() => deleteTask(task._id)} className="delete-btn">Delete</button>
              <button onClick={() => startEditing(task)} className="edit-btn">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
