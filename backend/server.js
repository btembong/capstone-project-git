const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy tasks array simulating a database
let tasks = [
    { id: 1, title: "Git Workflow Simulation end of day" },
    { id: 2, title: "Render Cloud Deployment Testing" :}
];

// GET Route to fetch tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// POST Route to create a task
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.listen(PORT, () => {
    console.log(`Backend running smoothly on port ${PORT}`);
});
