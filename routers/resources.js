const express = require("express");

const resources = require("../models/resourceMod");

const router = express.Router();

router.get("/", (req, res) => {
    resources
        .loadRes()
        .then((resources) => res.status(200).json(resources))
        .catch((error) => {
            console.log(console.error());
            res.status(500).json({ message: 'Could not load resources' });
        });
});

router.post("/", (req, res) => {
    if (req.body.resource_name) {
        resources
            .addRes(req.body)
            .then((resource) => res.status(201).json(resource))
            .catch((error) => {
                console.log(error);
                res.status(500).json({ message: "Could not add resource" });
            });
    } else {
        res.status(400).json({ message: "Resource name required" });
    }
});

module.exports = router;