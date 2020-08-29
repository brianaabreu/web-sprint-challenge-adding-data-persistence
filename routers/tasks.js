const express = require("express");

const tasks = require("../models/taskMod");

const router = express.Router();

router.get("/", (req, res) => {
    tasks
        .loadTasks()
        .then((tasks) => res.status(200).json(tasks))
        .catch((error) => {
            console.log(error.message);
            res.status(500).json({ message: 'Could not load tasks' });
        });
});

router.post("/", (req, res) => {
    if (req.body.description && req.body.project_id) {
        tasks
            .addTask(req.body)
            .then((task) => res.status(201).json(task))
            .catch((error) => {
                console.log(error);
                res.status(500).json({ message: 'Could not add task' });
            });
    } else {
        res.status(400).json({ message: "Description Required." });
    }
});

module.exports = router;