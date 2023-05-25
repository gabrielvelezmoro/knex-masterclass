
const express = require('express');
const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router()

routes.post('/users', UserController.create)
    .get('/users', UserController.index)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.delete)
    .get('/projects', ProjectController.index)
    .post('/projects', ProjectController.create)

module.exports = routes