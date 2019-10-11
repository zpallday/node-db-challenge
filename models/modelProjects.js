const db = require('../data/db-config')

function getProjects() {
    return db('projects');
}

function addProject(data) {
    return db('projects')
    .insert(data)
}

module.exports = {
    getProjects,
    addProject
}