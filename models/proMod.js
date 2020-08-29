const db = require("../data/db-config");

module.exports = {
    loadProjects,
    addProject
}

function loadProjects() {
    return db("projects");
}

function addProject(project) {
    return db("projects")
        .insert(project);
}