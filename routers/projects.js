const express = require("express");
const projects = require("../models/proMod")
const router = express.Router();

router.get("/", (req, res) => {
    projects
        .loadProjects()
        .then((projects) => res.status(200).json(projects))
        .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Could not load projects' });
        });
});


router.post("/", (req, res) => {
    if (req.body.name) {
        projects
            .addProject(req.body)
            .then((project) => res.status(201).json(project))
            .catch((error) => {
                console.log(error);
                res.status(500).json({ message: 'Could not add new project' });
            });
    } else {
        res.status(400).json({ message: 'Project name required' });
    }
});


module.exports = router;