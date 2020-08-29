const db = require("../data/db-config");

module.exports = {
    loadTasks,
    addTask
};

function loadTasks() {
    return db("tasks")
        .join("projects", "projects.id", "tasks.project_id")
        .select(
            "tasks.id",
            "tasks.description",
            "tasks.notes",
            "tasks.completed",
            "projects.id as project_id",
            "projects.name as name_of_project",
            "projects.description as description_of_project"
        );
}

function addTask(task) {
    return db("tasks")
        .insert(task);
}