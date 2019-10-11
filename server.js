const express = require('express');
const helmet = require('helmet');
const routeProjects = require('./routes/routeProjects');
const routeResources = require('./routes/routeResources.js');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', routeProjects);
server.use('/api/resources/', routeResources);






module.exports = server;