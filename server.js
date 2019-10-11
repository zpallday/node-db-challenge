const express = require('express');
const helmet = require('helmet');
const routeProjects = require('./routes/routeProjects');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', routeProjects);







module.exports = server;