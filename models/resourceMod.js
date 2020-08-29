const db = require("../data/db-config");

module.exports = {
    loadRes,
    addRes,
};

function loadRes() {
    return db("resources");
}

function addRes(resource) {
    return db("resources")
        .insert(resource);
}